'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var User = require('./User.model');

var UserService = {
  get: co(function* () {
    var users;

    try {
      users = yield User.find();
    } catch (err) {
      return [null, err];
    }

    return [users, null];
  })
};

module.exports = UserService;
