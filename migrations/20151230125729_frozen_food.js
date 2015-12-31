
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('category', function(table){
      table.integer('id').primary();
      table.string('name');
    }),
    knex.schema.createTable('unit', function(table){
      table.integer('id').primary();
      table.string('name');
    }),
    knex.schema.createTable('food', function(table){
      table.increments('id').primary();
      table.string('name');
      table.integer('quantity');
      table.integer('unit_id').unsigned().references('id').inTable('unit');
      table.integer('category_id').unsigned().references('id').inTable('category');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('food'),
    knex.schema.dropTableIfExists('unit'),
    knex.schema.dropTableIfExists('category')
  ]);
};
