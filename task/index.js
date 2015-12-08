'use strict';

var TaskController = require('./task.controller');

module.exports = [
  {
    method: 'GET',
    path: '/tasks/{id}',
    handler: TaskController.getByUserId
  }
];
