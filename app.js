const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1)  MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// Serving static files
// express.static() defines a folder which we can access to serve static files. Serves only files, not folders (can serve 'http://127.0.0.1:3000/img/pin.png', but can't serve 'http://127.0.0.1:3000/img/')
app.use(express.static(`${__dirname}/public`));

// Defining our own middleware
// The order of middlewares matters. If it ts defined after a request-response cycle has ended (when a handler function sends the response), it won't be called, it won't be a part of the middleware stack. So global middleware functions are declared before the handler functions, if we want them to be executed.
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  // NB!!! Always use next() at the end of the middleware. Otherwise we will never exit the middleware.
  next();
});

// create a middleware to add the request time to the response object
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// mounting the routers (these routers are actually middlewares)
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
