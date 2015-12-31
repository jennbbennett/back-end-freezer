exports.seed = function(knex, Promise) {
  return knex("food").del().then(function() {
    return Promise.all([
      knex('food').insert({
        id: 1,
        name: 'bacon',
        quantity: 3,
        unit_id: 2,
        category_id: 2
      }),
      knex('food').insert({
        id: 2,
        name: 'low carb bread',
        quantity: 2,
        unit_id: 1,
        category_id: 1
      }),
      knex('food').insert({
        id: 3,
        name: 'butter',
        quantity: 4,
        unit_id: 3,
        category_id: 3
      })
    ]);
  });
};
