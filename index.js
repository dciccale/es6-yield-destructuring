'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

const PORT = 9001;

server.connection({port: PORT});

server.route(require('./user'));
server.route(require('./task'));

if (!module.parent) {
  server.start(() => console.log('Server listening on %d', PORT));
}

module.exports = server;
