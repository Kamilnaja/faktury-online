var express = require('express');
var app = express();
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var FV = require('./models/fv');

app.use(bodyParser.json());
app.use(express.static(__dirname));

//zwraca wszystkie fv
app.get('/api/fvs', function (req, res, next) {
  FV.find(function (err, fvs) {
    if (err) {return next (err)}
    res.json(fvs);
  })
})

app.get('/', function (req, res){
  res.sendFile(__dirname + "index.js");
})

app.post('/api/fvs', function (req, res, next) {
  var fv = new FV ({
    client: req.body.client,
    amount: req.body.amount
  })
  fv.save(function (err, post) {
    if (err) {return next(err)}
    res.json(201, fv);
  })
})

//wyświetl co jest w bazie

app.listen(3000);