'use strict';

var UserController = require('./user.controller');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: UserController.get
  }
];
