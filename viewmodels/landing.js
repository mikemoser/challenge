(function (undefined) {
  var Services = require('../services');

  var ViewModel = function () {
    this.challenges = null;
  }

  function create(id) {
    var viewModel = new ViewModel();

    // TODO: Decide what we want to display on the landing page
    // and just pull back that data.
    return Services.Challenge.getChallenges()
    .then(function (challenges) {
      viewModel.challenges = challenges;
      return viewModel;
    });
  }

  module.exports.create = create;

})();