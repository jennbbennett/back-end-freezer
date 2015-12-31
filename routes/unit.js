var express = require('express');
// var app = express();
var router = express.Router();

var knex = require('./connection');

router.get('/', function(req, res) {
  knex('unit').select().then(function(unit){
    res.send({
      unit: unit
    });
  });
});




module.exports = router;
