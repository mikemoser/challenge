(function (undefined) {
  var Models = require('../models');
  var Promise = require('promise');

  function getUsers() {
    return Promise.denodeify(Models.User.find.bind(Models.User))({})
    .then(function (results) {
      return results;
    });
  }

  module.exports = {
    getUsers: getUsers
  }
})();