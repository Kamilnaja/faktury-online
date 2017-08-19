var db = require('../db');
var FV = db.model('FV', {
  number: {type: String, required: false},
  client: {type: String, required: true},
  amount: {type: Number, required: true }
});
module.exports = FV;