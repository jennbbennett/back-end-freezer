var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'frozen_food',
    user: 'frozen_food_knex',
    password: 'frozen_food_password'
  }
});


module.exports = knex;
