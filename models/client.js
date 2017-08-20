var db = require('../db');
var Client = db.model('Client', {
  name: {type: String, required: true },
  nip: {type: Number, required: true }
});
module.exports = Client;