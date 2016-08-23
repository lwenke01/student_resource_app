'use strict';


const express = require('express');
const fs = require('fs');
const app = module.exports = exports = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/my_app_dev');

// let express     = require('express');
// let app         = express();
// let bodyParser = require('body-parser');
// let methodOverride = require('method-override');
// let mongoose = require('mongoose');
//config

//config files

let db = require('./config/db')

//PORT

let port = process.env.PORT || 8080;

//connect to mongoDB database
mongoose.connect(db.url);

let router = express.Router();


//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
//get all data
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/build'));

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//routes
require('./app/routes')(app);
app.use('/api', router);

//start app
app.listen(port);

console.log('On port ' + port);

//expose app
exports = module.exports = app;
