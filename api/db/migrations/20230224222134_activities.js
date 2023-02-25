/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("activities", function (table) {
    table.increments("id");
    table.string("urlImage", 255); // 255 is character length
    table.integer("startAge");
    table.integer("endAge");
    table.string("name", 255);
    table.boolean("indoor");
    table.boolean("outdoor");
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("activities");
};
