var db = require('../db');
var FV = db.model('FV', {
  fvNumber: {type: String, required: true},
  client: {type: String, required: true},
  amount: {type: Number, required: true },
  vat: {type: Number, required: true}
});
module.exports = FV;