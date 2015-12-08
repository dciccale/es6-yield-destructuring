'use strict';

var Promise = require('bluebird');

var tasks = require('./tasks.json');

var Task = {
  find: function (query) {
    var userTasks = tasks.filter(t => t.user_id === query.user_id);
    return Promise.resolve(userTasks);
  }
};

module.exports = Task;
