var db = require('../db');
var FV = db.model('FV', {
  numer: {type: String, required: true},
  klient: {type: String, required: true},
  amount: {type: Number, required: true }
})
module.exports = FV;