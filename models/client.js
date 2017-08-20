var db = require('../db');
var Client = db.model('Client', {
  name: {type: String, required: true },
  nip: {type: Number, required: true },
  addressStreet: {type: String, required: true},
  addressNr: { type: Number, required: false},
  addressCity: {type: String, required: false },
  addressPostal: {type: String, required: false}
});
module.exports = Client;