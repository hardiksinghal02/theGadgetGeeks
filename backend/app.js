const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const session = require('express-session');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret:'the day was not that great any more after the robotics workshop', saveUninitialized: false, resave:false}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
                );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
  next();
});

app.use(productRoute);
app.use(authRoute);





module.exports = app;
