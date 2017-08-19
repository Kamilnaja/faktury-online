var db = require('../db');
var Client = db.model('Client', {
  name: {type: String, required: false },
  nip: {type: Number, required: false }
});
module.exports = Client;