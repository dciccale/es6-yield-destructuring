const Promise = require('bluebird');

const tasks = require('./tasks.json');

const Task = {};

Task.find = (query) => Promise.filter(tasks, t => t.user_id === query.user_id);

module.exports = Task;
