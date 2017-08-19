var Client = require('../../models/client');

  app.get('/', function (req, res, next) {
    Client.find(function (err, clients) {
      if (err) {return next (err)}
      res.json(clients);
    })
  });
  
  app.post('/', function (req, res, next) {
    var client = new Client ({
      name: req.body.name,
      nip: req.body.nip
    });
    client.save(function (err, client) {
      if (err) {return next(err)}
      res.json(201, client);
    })
  });
