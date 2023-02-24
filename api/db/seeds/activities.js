/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {
      name: "apple",
      email: "123@4"
    }

  ]);
};
