/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
		.createTable('papers', function (table) {
			table.increments('id').primary()
			table.string('title')
			table.string('author')
			table.timestamps(true,true)
		})
		.createTable('footnotes', function (table) {
			table.increaments('id').primary()
			table.string('note')
			table.integer('paper_id').unsigned()
			table.foreign('paper_id')
				.references('papers.id')
			table.timestamp(true,true)
		})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema	
		.dropTable('footnotes')
		.dropTable('papers')
};
