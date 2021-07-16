const dotenv = require('dotenv');
// read our custom variables from the file and save them to node's enviroment variables
dotenv.config({ path: './config.env' });

const app = require('./app');

// Environment variables
// console.log(app.get('env')); // set by express
// console.log(process.env); // set by node

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
