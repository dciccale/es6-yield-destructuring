const userController = require('./user.controller')();

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: userController.get
  }
];
