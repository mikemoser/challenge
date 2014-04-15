(function (undefined) {
  var Services = require('../services');

  var ViewModel = function () {
    this.challenges = [];
  }

  function create(id) {
    var viewModel = new ViewModel();

    return Services.Challenge.getChallenges()
    .then(function (challenges) {
      viewModel.challenges = challenges;
      return viewModel;
    });
  }

  module.exports.create = create;

})();