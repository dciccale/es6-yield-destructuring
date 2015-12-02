// expected to be used with node --harmony_destructuring flag
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var util = require('util');

var Hapi = require('hapi');
var server = new Hapi.Server();
var Promise = require('bluebird');
var co = Promise.coroutine;

var config = {
  port: 9001,
  env: process.env.NODE_ENV
};

var UserService = require('./user/user.service');
var TaskService = require('./task/task.service');
var taskErrors = require('./task/task-errors');

server.connection({port: config.port});

server.route({
  method: 'GET',
  path: '/users',
  handler: co(function* (req, reply) {
    var [users, err] = yield UserService.get();

    if (err !== null) {
      return reply(err.message);
    }

    reply(users);
  })
});

server.route({
  method: 'GET',
  path: '/tasks/{id}',
  handler: co(function* (req, reply) {
    var user_id = parseInt(req.params.id, 10) || 1;

    var [tasks, err] = yield TaskService.getByUserId(user_id);

    if (err !== null) {
      if (err instanceof taskErrors.TasksNotFound) {
        return reply(err.message).code(404);
      } else {
        return reply(err.message);
      }
    }

    reply(tasks);
  })
});

server.start(() => {
  console.log('Server listening on %d, in %s mode', config.port, config.env);
});
