'use strict';

var co = require('bluebird').coroutine;

/*
 * Helper function to try/catch
 * and return a value in the form of [val, err]
 */
module.exports = co(function* (fn, ...args) {
  var [val, err] = [null, null];

  try {
    val = yield fn.apply(fn, args);
  } catch (e) {
    err = e;
  }

  return [val, err];
});
