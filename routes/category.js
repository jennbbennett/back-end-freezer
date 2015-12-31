var express = require('express');
var router = express.Router();
var knex = require('./connection');

router.get('/', function(req, res) {
  knex('category').select().then(function(category){
    res.send({
      category: category
    });
  });
});




module.exports = router;
