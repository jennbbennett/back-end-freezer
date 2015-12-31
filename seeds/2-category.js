
exports.seed = function(knex, Promise) {
  return knex("category").del().then(function() {
    return Promise.all([
      knex('category').insert({
        id: 1,
        name: 'dairy',
      }),
      knex('category').insert({
        id: 2,
        name: 'desserts',
      }),
      knex('category').insert({
        id: 3,
        name: 'entrees',
      }),
      knex('category').insert({
        id: 4,
        name: 'fruits',
      }),
      knex('category').insert({
        id: 5,
        name: 'grains',
      }),
      knex('category').insert({
        id: 6,
        name: 'proteins',
      }),
      knex('category').insert({
        id: 7,
        name: 'sides',
      }),
      knex('category').insert({
        id: 8,
        name: 'soups',
      }),
      knex('category').insert({
        id: 9,
        name: 'vegetables',
      })
    ]);
  });
};
