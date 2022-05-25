/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('jobs', (table) => {
        table.increments('id').primary();
        table.string('title');
        table.string('company');
        table.string('description');
        table.string('redirectUrl').notNullable();
        table.string('approvedBy');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('jobs');
};