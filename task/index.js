const TaskModel = require('./task.model');
const taskService = require('./task.service')(TaskModel);
const taskController = require('./task.controller')(taskService);

module.exports = [
  {
    method: 'GET',
    path: '/tasks/{id}',
    handler: taskController.getByUserId
  }
];
