var express = require('express');
var app = express();
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var FV = require('./models/fv');
var Client = require('./models/client');

app.use(bodyParser.json());
app.use(express.static(__dirname));
//todo get clients from db 
//zwraca wszystkie fv
app.get('/api/fvs', function (req, res, next) {
  FV.find(function (err, fvs) {
    if (err) {return next (err)}
    res.json(fvs);
  })
})

app.get('/api/clients', function (req, res, next) {
  Client.find(function (err, clients) {
    if (err) {return next (err)}
    res.json(clients);
  })
})

app.get('/', function (req, res){
  res.sendFile(__dirname + "index.js");
})

app.post('/api/fvs', function (req, res, next) {
  var fv = new FV ({
    client: req.body.client,
    amount: req.body.amount,
    number: number++
  })
  fv.save(function (err, post) {
    if (err) {return next(err)}
    res.json(201, fv);
  })
})

app.post('/api/clients', function (req, res, next) {
  var client = new Client ({
    Name: req.body.client-name,
    Nip: req.body.nip
  })
  client.save(function (err, post) {
    if (err) {return next(err)}
    res.json(201, client);
  })
})

//wyświetl co jest w bazie

app.listen(3000);

//todo -dodawanie klientów