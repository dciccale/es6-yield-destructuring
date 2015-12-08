'use strict';

var co = require('bluebird').coroutine;

var valerr = require('../valerr');
var Task = require('./task.model');
var taskErrors = require('./task-errors');

var TaskService = {
  getByUserId: co(function* (user_id) {
    var [tasks, err] = yield valerr(Task.find, {user_id: user_id});

    // Throw custom error if no tasks found
    if (!tasks.length) {
      return [tasks, new taskErrors.TasksNotFound];
    }

    return [tasks, err];
  })
};

module.exports = TaskService;
