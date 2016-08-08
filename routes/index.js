var HttpError = require('../error').HttpError;
module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index.html', {
            title: 'Main page'
        });
    });
    app.use(function(req, res, next) {
        err = res.status(404);
        next(new HttpError(err.statusCode));
    });
};