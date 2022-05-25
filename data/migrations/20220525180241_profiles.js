/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  .createTable('profiles', function(table) {
    table.string('id').primary();
    table.string('email');
    table.string('role');
    table.string('name');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profiles');
};
