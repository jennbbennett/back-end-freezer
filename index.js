var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var foodRoute = require('./routes/food');
var unitRoute = require('./routes/unit');
var categoryRoute = require('./routes/category');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/food', foodRoute);
app.use('/unit', unitRoute);
app.use('/category', categoryRoute);

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
