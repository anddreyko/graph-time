var log = require('../lib/#log')(module)
  , sec = require('../lib/#sec')
  , conf = require('../conf')
  , async = require('async')
  , HttpError = require('../error').HttpError
  , d
  , s1
  , m1
  , h1
  , d1
  , f1
  , listVertex
  , listRibs;

module.exports = function(server) {
    var io = require('socket.io').listen(server);
    io.set('origins', '*:*');
    io.sockets.on('connection', function(s) {
        setInterval(function(){
            d = new Date();
            s1 = d.getSeconds() + d.getMilliseconds() / 1000;
            m1 = d.getMinutes() + s1 / 60;
            h1 = d.getHours() + m1 / 60;
            d1 = d.getDate() + h1 / 24;
            f1 = d.getMonth() + d1 / 30;
            listVertex = [
                [
                    s1 / 10
                  , 9
                  , 10
                ], [
                    s1 % 10
                  , 9
                  , 10
                ] , [
                    m1 / 10
                  , 8
                  , 12
                ], [
                    m1 % 10
                  , 8
                  , 12
                ] , [
                    h1 / 10
                  , 7
                  , 15
                ], [
                    h1 % 10
                  , 7
                  , 15
                ] , [
                    d1 / 10
                  , 6
                  , 17
                ], [
                    d1 % 10
                  , 6
                  , 17
                ] , [
                    f1 / 10
                  , 5
                  , 20
                ], [
                    f1 % 10
                  , 5
                  , 20
                ]
            ];
            listRibs = [
                [
                    listVertex[0]
                  , listVertex[2]
                ], [
                    listVertex[2]
                  , listVertex[4]
                ], [
                    listVertex[4]
                  , listVertex[6]
                ], [
                    listVertex[6]
                  , listVertex[8]
                ], [
                    listVertex[1]
                  , listVertex[3]
                ], [
                    listVertex[3]
                  , listVertex[5]
                ], [
                    listVertex[5]
                  , listVertex[7]
                ], [
                    listVertex[7]
                  , listVertex[9]
                ]
            ]
            s.emit('draw', listRibs);
        }, 1);
    });
    return io;
}