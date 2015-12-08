'use strict';

var co = require('bluebird').coroutine;

/*
 * Helper function to return the value
 * in the form of [val, err]
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
