var express = require('express')
  , http = require('http')
  , HttpError = require('./error').HttpError
  , log = require('./lib/#log')(module)
  , conf = require('./conf')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || conf.get('port');
app.configure(function() {
    app.engine('html', require('uinexpress').__express);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/template');
    app.set('view options', {layout: 'layout.html'});
    app.use(express.static(__dirname + '/www'));
});
require('./routes')(app);
require('./socket')(server);
server.listen(port, function(){
    log.info(port);
});