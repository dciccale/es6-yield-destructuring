const Promise = require('bluebird');
const co = Promise.coroutine;

const taskErrors = require('./task-errors');

const TaskController = (taskService) => ({
  getByUserId: co(function* (req, reply) {
    const user_id = parseInt(req.params.id, 10);

    const [tasks, err] = yield taskService.getByUserId(user_id);

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
});

module.exports = TaskController;
