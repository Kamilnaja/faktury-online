var express = require('express');
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var FV = require('./models/fv');
var Client = require('./models/client');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use('api/fv', require('./controllers/api/fv'));
app.use('api/client', require('./controllers/api/client'));
//zwraca wszystkie fv

app.get('/', function (req, res){
  res.sendFile(__dirname + '/layouts/index.html');
})

app.listen(3000);
