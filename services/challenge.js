(function (undefined) {
  var Models = require('../models');
  var Promise = require('promise');

  function getChallenges() {
    return Promise.denodeify(Models.Challenge.find.bind(Models.Challenge))({})
    .then(function (challenges) {
      return challenges;
    });
  }

  function getChallenge(id) {
    return Promise.denodeify(Models.Challenge.findById.bind(Models.Challenge))(id)
    .then(function (challenge) {
      return challenge;
    });
  }

  module.exports = {
    getChallenge: getChallenge,
    getChallenges: getChallenges
  }

})();