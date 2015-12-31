var express = require('express');
// var app = express();
var router = express.Router();

var knex = require('./connection');

router.get('/', function(req, res) {
  knex('food').select().then(function(food){
    res.send({
      food: food
    });
  });
});

router.get('/:id', function(req, res) {
  knex('food').select()
  .where('id', req.params.id)
  .then(function(food){
    res.status(200).send({food:food});
  });
});

router.post('/', function(req, res){
  knex('food').insert({
    name: req.body.name,
    quantity: req.body.quantity,
    unit_id: req.body.unit_id,
    category_id: req.body.category_id
  }, 'id').then(function(id){
    req.body.id = id[0];
    res.status(201).send(req.body);
  });
});


router.put('/:id', function(req, res){
  knex('food').where('id', req.params.id)
  .update({
    name: req.body.name,
    quantity: req.body.quantity,
    unit_id: req.body.unit_id,
    category_id: req.body.category_id
  }).then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){
  knex('food').delete()
  .where('id', req.params.id).del()
  .then(function(result){
    res.json(result);
  });
});

module.exports = router;
