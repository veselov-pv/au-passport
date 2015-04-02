var express = require('express'),
	cors = require('cors');
var app = express();

app.use(cors());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use('/', express.static('client'));

/*app.get('/', function(request, response) {
  response.send('Hello World!');
});*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
