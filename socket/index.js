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
    io.set('origins', conf.get('uri')+':'+conf.get('port'));

    io.sockets.on('connection', function(s) {

        /**
         * Run loop through Timer for emitting data of date every 24 ms
         * return array listRibs - pairs of vertices
         */
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
                  , 1
                ], [
                    s1 % 10
                  , 9
                  , 1
                ] , [
                    m1 / 10
                  , 8
                  , 1.5
                ], [
                    m1 % 10
                  , 8
                  , 1.5
                ] , [
                    h1 / 10
                  , 7
                  , 2
                ], [
                    h1 % 10
                  , 7
                  , 2
                ] , [
                    d1 / 10
                  , 6
                  , 2.5
                ], [
                    d1 % 10
                  , 6
                  , 2.5
                ] , [
                    f1 / 10
                  , 5
                  , 3
                ], [
                    f1 % 10
                  , 5
                  , 3
                ]
            ];

            s.emit('draw', [
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
            ]);

        }, 24);
    });

    return io;
}