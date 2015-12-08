'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var TaskService = require('./task.service');
var taskErrors = require('./task-errors');

var TaskController = {
  getByUserId: co(function* (req, reply) {
    var user_id = parseInt(req.params.id, 10);

    var [tasks, err] = yield TaskService.getByUserId(user_id);

    if (err !== null) {
      // No tasks found for the user
      if (err instanceof taskErrors.TasksNotFound) {
        return reply(err.message).code(404);

      // Any other error
      } else {
        return reply(err.message).code(500);
      }
    }

    reply(tasks);
  })
};

module.exports = TaskController;
