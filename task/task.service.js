const Promise = require('bluebird');
const co = Promise.coroutine;

const taskErrors = require('./task-errors');

const TaskService = (TaskModel) => ({
  getByUserId: co(function* (user_id) {
    let tasks = [];

    try {
      tasks = yield TaskModel.find({user_id: user_id});
    } catch (err) {
      return [null, err];
    }

    // Throw custom error if no tasks found
    if (!tasks.length) {
      return [null, new taskErrors.TasksNotFound];
    }

    return [tasks, null];
  })
});

module.exports = TaskService;
