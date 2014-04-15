(function (undefined) {
  var Models = require('../models');
  var Promise = require('promise');

  function getChallenge(id) {
    return Promise.denodeify(Models.Challenge.findById.bind(Models.Challenge))(id)
    .then(function (challenge) {
      return challenge;
    });
  }

  module.exports = {
    getChallenge: getChallenge
  }

})();