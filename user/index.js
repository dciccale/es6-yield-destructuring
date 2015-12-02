'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var UserService = require('./user.service');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: co(function* (req, reply) {
      var [users, err] = yield UserService.get();

      if (err !== null) {
        return reply(err.message);
      }

      reply(users);
    })
  }
];
