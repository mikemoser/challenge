(function (undefined) {
  var Services = require('../services');

  var ViewModel = function () {
    this.challenge = {
      title: "Batman",
      subtitle: "Get rich boy ripped!",
      days: [
        [
          {description: "4 push-ups"},
          {description: "8 mountain climbers"}
        ],
        [
          {description: "40 push-ups"},
          {description: "80 mountain climbers"}
        ]
      ]
    };
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