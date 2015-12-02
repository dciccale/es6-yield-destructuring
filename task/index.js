'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var TaskService = require('./task.service');
var taskErrors = require('./task-errors');

module.exports = [
  {
    method: 'GET',
    path: '/tasks/{id}',
    handler: co(function* (req, reply) {
      var user_id = parseInt(req.params.id, 10) || 1;

      var [tasks, err] = yield TaskService.getByUserId(user_id);

      if (err !== null) {
        if (err instanceof taskErrors.TasksNotFound) {
          return reply(err.message).code(404);
        } else {
          return reply(err.message);
        }
      }

      reply(tasks);
    })
  }
]
