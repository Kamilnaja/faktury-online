module.exports = function (app) {
  var FV = require('./models/fv');
  var Client = require('./models/client');
  
  app.post('/api/fvs', function (req, res, next) {
    var fv = new FV({
      client: req.body.client,
      amount: req.body.amount,
      vat: req.body.vat,
      fvNumber: req.body.fvNumber,
      fvNip: req.body.fvNip,
      fvDate: req.body.fvDate
    });
    fv.save(function (err, fv) {
      if (err) { return next(err) }
      res.json(201, fv);
    })
  });

  app.post('/api/clients', function (req, res, next) {
    var client = new Client({
      name: req.body.name,
      nip: req.body.nip,
      addressNr: req.body.addressNr,
      addressCity: req.body.addressCity,
      addressPostal: req.body.addressPostal,
      addressStreet: req.body.addressStreet
    });
    client.save(function (err, post) {
      if (err) { return next(err) }
      res.json(201, client);
    })
  });

  app.get('/api/fvs', function (req, res, next) {
    FV.find(function (err, fvs) {
      if (err) { return next(err) }
      res.json(fvs);
    })
  });

  app.get('/api/clients', function (req, res, next) {
    Client.find(function (err, clients) {
      if (err) { return next(err) }
      res.json(clients);
    })
  })

};