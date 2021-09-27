const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES

// Set security HTTP headers
app.use(helmet());

// Development logging
// ->  process.env is available even though it is not defined with require in this file. Why? Because the process is one no matter in which file we are, and the loading of the enviroment variables needs to happen only once. Then they are available on the process. This has happened in server.js
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Serving static files
// -> express.static() a folder which we can access to serve static files. Serves only files, not folders (can serve 'http://127.0.0.1:3000/img/pin.png', but can't serve 'http://127.0.0.1:3000/img/')
app.use(express.static(`${__dirname}/public`));

// Test middleware: create a middleware to add the request time to the response object
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// mounting the routers (these routers are actually middlewares)
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// will be executed only if the response-request cycle was not yet finished. So the route was not matched in the above middlewares (which are higher in the middleware stack).
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
