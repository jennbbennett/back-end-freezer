
exports.seed = function(knex, Promise) {
  return knex("unit").del().then(function() {
    return Promise.all([
      knex('unit').insert({
        id: 1,
        name: 'bag(s)',
      }),
      knex('unit').insert({
        id: 2,
        name: 'box(es)',
      }),
      knex('unit').insert({
        id: 3,
        name: 'dozen',
      }),
      knex('unit').insert({
        id: 4,
        name: 'jar(s)',
      }),
      knex('unit').insert({
        id: 5,
        name: 'can(s)',
      }),
      knex('unit').insert({
        id: 6,
        name: 'small',
      }),
      knex('unit').insert({
        id: 7,
        name: 'large',
      }),
      knex('unit').insert({
        id: 8,
        name: 'pound(s)',
      }),
      knex('unit').insert({
        id: 9,
        name: 'oz',
      }),
      knex('unit').insert({
        id: 10,
        name: 'loaves',
      }),
    ]);
  });
};
