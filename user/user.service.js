'use strict';

var co = require('bluebird').coroutine;

var valerr = require('../valerr');
var User = require('./user.model');

var UserService = {
  get: co(function* () {
    return yield valerr(User.find);
  })
};

module.exports = UserService;
