(function (undefined) {
  var mongoose = require('mongoose');

  var schema = new mongoose.Schema({ 
    name: { type: String, required: true } 
  });

  module.exports = mongoose.model('User', schema);

})();