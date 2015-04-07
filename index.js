var express = require('express'),
	cors = require('cors');
var app = express();

app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('pages/home');
});

app.get('/home', function(req, res) {
	res.render('pages/home');
});

app.get('/order', function(req, res) {
	res.render('pages/order');
});

app.get('/edit', function(req, res) {
	res.render('pages/edit');
});

app.get('/checkout', function(req, res) {
	res.render('pages/checkout');
});

app.get('/confirmation', function(req, res) {
	res.render('pages/confirmation');
});

app.get('/tips', function(req, res) {
	res.render('pages/tips');
});

app.get('/feedback', function(req, res) {
	res.render('pages/feedback');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
