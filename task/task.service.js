'use strict';

var Promise = require('bluebird');
var co = Promise.coroutine;

var Task = require('./task.model');
var taskErrors = require('./task-errors');

var TaskService = {
  getByUserId: co(function* (user_id) {
    var tasks;

    try {
      tasks = yield Task.find({user_id: user_id});
    } catch (err) {
      return [null, err];
    }

    // Throw custom error if no tasks found
    if (!tasks.length) {
      return [null, new taskErrors.TasksNotFound];
    }

    return [tasks, null];
  })
};

module.exports = TaskService;
