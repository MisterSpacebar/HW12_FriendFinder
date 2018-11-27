var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require('./app/routing/api.js')(app); 
require('./app/routing/html.js')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});