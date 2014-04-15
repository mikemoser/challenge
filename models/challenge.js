(function (undefined) {
  var mongoose = require('mongoose');

  var Activity = new mongoose.Schema({
    name: String,
    description: String
  });

  var Day = new mongoose.Schema({
    activities: [Activity]
  });

  var Challenge = new mongoose.Schema({ 
    title: String, 
    subtitle: String,
    days: [Day]
  });

  module.exports = mongoose.model('Challenge', Challenge);

})();