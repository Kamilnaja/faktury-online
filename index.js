var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res){
  res.sendFile(__dirname + "index.js");
})

var mongoose = require('mongoose');
var mongoDB = 'mongodb://kamil:0000@ds145283.mlab.com:45283/faktury';
mongoose.connect(mongoDB, {useMongoClient: true });

var db = mongoose.connection;

var Schema = mongoose.Schema;

var singleFV = new Schema ({
  klient: String,
  numer: Number
});

db.on('error', console.error.bind(console, 'mongo error'));
//połącz z db

//wyświetl co jest w bazie

app.listen(3000);