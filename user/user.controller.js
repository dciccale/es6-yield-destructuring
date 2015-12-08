'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var UserService = require('./user.service');

var UserController = {
  get: co(function* (req, reply) {
    var [users, err] = yield UserService.get();

    if (err !== null) {
      return reply(err.message).code(500);
    }

    reply(users);
  })
};

module.exports = UserController;
