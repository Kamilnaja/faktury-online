var FV = require('../../models/fv');

  app.get('/', function (req, res, next) {
    FV.find(function (err, fvs) {
      if (err) {return next (err)}
      res.json(fvs);
    })
  })
  
  app.post('/', function (req, res, next) {
    var fv = new FV ({
      client: req.body.client,
      amount: req.body.amount,
    })
    fv.save(function (err, post) {
      if (err) {return next(err)}
      res.json(201, fv);
    })
  })