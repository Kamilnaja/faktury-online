var mongoose = require('mongoose');
var mongoDB = 'mongodb://kamil:0000@ds145283.mlab.com:45283/faktury';
mongoose.connect(mongoDB, {useMongoClient: true }, function () {
  console.log('connected to mongodb');
});
module.exports = mongoose;