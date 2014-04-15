(function(undefined) {
  var express = require('express');
  var app = express();
  var mongoose = require('mongoose');
  var ViewModels = require('./viewmodels');

  mongoose.connect('mongodb://127.0.0.1:27017/challenge');

  var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
  });

  app.set('view engine', 'jade');

  // Static Routes
  app.use('/img', express.static(__dirname + '/img'));
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/js', express.static(__dirname + '/js'));
  
  app.get('/', function (req, res) {
    ViewModels.Users.create()
    .then(function(result) {
      res.render('users', result);
    });
  });

  app.get('/challenges/:id', function (req, res) {
    ViewModels.Challenge.create(function(err, viewModel) {
      console.log(viewModel);
      res.render('challenge', viewModel);
    });
  });

})();