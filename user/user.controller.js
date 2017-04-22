const Promise = require('bluebird');
const co = Promise.coroutine;

const UserModel = require('./user.model');
const userService = require('./user.service')(UserModel);

const UserController = () => ({
  get: co(function* (req, reply) {
    const [users, err] = yield userService.get();

    if (err !== null) {
      return reply(err.message).code(500);
    }

    reply(users);
  })
});

module.exports = UserController;
