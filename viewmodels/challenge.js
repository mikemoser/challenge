(function (undefined) {
  var Services = require('../services');

  var ViewModel = function () {
    this.challenge = null;
  }

  function create(id) {
    var viewModel = new ViewModel();

    return Services.Challenge.getChallenge(id)
    .then(function (challenge) {
      viewModel.challenge = challenge;
      return viewModel;
    });
  }

  module.exports.create = create;

})();