'use strict';

var taskErrors = {
  TasksNotFound: function (msg) {
    this.name = 'TasksNotFound';
    this.message = msg || 'No tasks found';
  }
};

// Extend from error
Object.setPrototypeOf(taskErrors.TasksNotFound.prototype, Error.prototype);

module.exports = taskErrors;
