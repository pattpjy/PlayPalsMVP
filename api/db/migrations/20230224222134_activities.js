/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("activities", function (table) {
    table.increments("id");
    table.string("img_url", 255); // 255 is character length
    table.integer("start_age");
    table.integer("end_age");
    table.string("name", 255);
    table.string("materials", 255);
    table.string("instructions", 255);
    table.boolean("indoor");
    table.boolean("outdoor");
    table.string("motor_skills", 255);
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
