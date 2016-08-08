var log = require('../lib/#log')(module)
  , sec = require('../lib/#sec')
  , conf = require('../conf')
  , connect = require('connect')
  , async = require('async')
  , HttpError = require('../error').HttpError;

module.exports = function(server) {
    var io = require('socket.io').listen(server);
    io.set('origins', conf.get('uri')+':*');
    io.sockets.on('connection', function(s) {
        
    });
    return io;
}