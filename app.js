//importing express
const express = require('express');

// This variable defines the port of your computer where the API will be available
const port = 3000;

//body parser is a module in express js.
const bodyParser=require('body-parser');
const books = require('./books');

//initializing the app.// This variable instantiate the Express.js library
const app = express();

//express.json() is a built-in middleware function in Express
//app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1/books', books);


// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
