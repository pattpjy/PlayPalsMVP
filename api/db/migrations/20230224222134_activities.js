/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  
exports.up = function(knex) {
    return knex.schema
      .createTable('activities', function (table) {
        table.increments('id');
        table.string('img_url').notNullable();
        table.integer('start_age').notNullable();
        table.integer('end_age').notNullable();
        table.string('name').notNullable();
        table.string('materials').notNullable();
        table.text('instructions').notNullable();
        table.boolean('indoor').notNullable();
        table.boolean('outdoor').notNullable();
        table.string('motor_skills').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTable('activities');
};
