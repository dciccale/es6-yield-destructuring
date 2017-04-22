const test = require('ava');

const server = require('../');

test.cb('get a list of users', t => {
  server.inject({method: 'GET', url: '/users'}, (res) => {
    t.deepEqual(res.result, [{"id":1,"name":"test"},{"id":2,"name":"test2"}]);
    t.end();
  });
});

test.cb('get tasks from a user by id', t => {
  server.inject({method: 'GET', url: '/tasks/1'}, (res) => {
    t.deepEqual(res.result, [{"id":1,"user_id":1,"description":"drink beer"}]);
    t.end();
  });
});

test.cb('should respond an error if no tasks for that user', t => {
  server.inject({method: 'GET', url: '/tasks/2'}, (res) => {
    t.deepEqual(res.result, 'No tasks found');
    t.end();
  });
});

test.cb('should respond an error if no tasks for that user', t => {
  server.inject({method: 'GET', url: '/tasks/2'}, (res) => {
    t.is(res.statusCode, 404);
    t.deepEqual(res.result, 'No tasks found');
    t.end();
  });
});
