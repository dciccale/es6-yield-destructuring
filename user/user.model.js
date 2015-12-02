'use strict';

var Promise = require('bluebird');

var users = require('./users.json');

var User = {
  find: function () {
    return Promise.resolve(users);
  }
};

module.exports = User;
