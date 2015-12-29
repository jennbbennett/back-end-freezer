// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'frozen_food',
      user:  'frozen_food_knex',
      password: 'frozen_food_password'
    }
  },

  production: {
    client: 'postgresql',
    connection: ''
  }

};
