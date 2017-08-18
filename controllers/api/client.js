var Client = require('../../models/client');

  app.get('/', function (req, res, next) {
    Client.find(function (err, clients) {
      if (err) {return next (err)}
      res.json(clients);
    })
  })
  
  app.post('/', function (req, res, next) {
    var client = new Client ({
      clientName: req.body.clientName,
      clientNip: req.body.clientNip
    })
    client.save(function (err, post) {
      if (err) {return next(err)}
      res.json(201, client);
    })
  })
