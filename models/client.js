var db = require('../db');
var Client = db.model('Client', {
  Name: {type: String, required: false },
  Nip: {type: Number, required: false }
});
module.exports = Client;