const Promise = require('bluebird');

const users = require('./users.json');

const User = {
  find: function () {
    return Promise.resolve(users);
  }
};

module.exports = User;
