var express = require('express');
var app = express();
var cors = require('cors');


app.use(cors());

var frozenFoods = [{
  id: 1,
  name: 'bacon',
  quantity: 3,
  unit_id: 6,
  category_id: 6
},
{
  id: 2,
  name: 'low carb bread',
  quantity: 2,
  unit_id: 8,
  category_id: 5,
},
{
  id: 3,
  name: 'butter',
  quantity: 4,
  unit_id: 6,
  category_id: 1
}];

app.get('/frozenFoods', function(req, res){
  res.send({frozenFoods: frozenFoods});
});

app.get('/frozenFoods/:id', function(req, res){
  res.json(getFrozenFood(frozenFoods, req.params.id));
});


function getFrozenFood(array, id){
  for(var i = 0; i < array.length; i++){
    if(array[i].id == id){
      return array[i];
    }
  }
  return 'food not found';
}

app.listen(8000, function(){
    console.log('Listening on port 8000');
});
