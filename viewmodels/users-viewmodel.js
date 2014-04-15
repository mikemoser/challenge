(function (undefined) {
  var Services = require('../services');

  var ViewModel = function () {
    this.users = [];
  }

  function create() {
    var viewModel = new ViewModel();

    return Services.User.getUsers()
    .then(function (results) {
      viewModel.users = results;
      return viewModel;
    });
  }

  module.exports.create = create;

})();