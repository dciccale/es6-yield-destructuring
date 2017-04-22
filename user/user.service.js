const Promise = require('bluebird');
const co = Promise.coroutine;

const UserService = (UserModel) => ({
  get: co(function* () {
    let [users, err] = [[], null];

    try {
      users = yield UserModel.find();
    } catch (e) {
      err = e;
    }

    return [users, err];
  })
});

module.exports = UserService;
