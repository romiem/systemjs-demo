var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'vash');
app.set('views', path.join( __dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, '/../public/www')));
console.log(path.join(__dirname, '/../public/www'));

app.get('/', function (req, res) {
	res.render('pages/index');	
});  

app.listen(port);
console.log('Express app started on port', port, 'in', process.env.NODE_ENV, 'mode');

/**
 * Expose
 */

module.exports = app;
