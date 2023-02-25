/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("activities").del();
  await knex("activities").insert([
    {
      id: 1,
      urlImage: "",
      startAge: 24,
      endAge: 48,
      name: "paper cutting",
      indoor: true,
      outdoor: false,
    },
    {
      id: 2,
      startAge: 8,
      endAge: 10,
      name: "Sensory bags and bins",
      indoor: true,
      outdoor: false,
    },
    {
      id: 3,
      startAge: 10,
      endAge: 48,
      name: "obstacle course",
      indoor: true,
      outdoor: true,
    },
    {
      id: 4,
      startAge: 9,
      endAge: 12,
      name: "pompom whisk",
      indoor: true,
      outdoor: false,
    },
    {
      id: 5,
      startAge: 36,
      endAge: 60,
      name: "running sponge",
      indoor: false,
      outdoor: true,
    },
    {
      id: 6,
      startAge: 12,
      endAge: 48,
      name: "car painting",
      indoor: false,
      outdoor: true,
    },
    {
      id: 7,
      startAge: 24,
      endAge: 48,
      name: "ice painting",
      indoor: true,
      outdoor: true,
    },
    {
      id: 8,
      startAge: 36,
      endAge: 48,
      name: "preparing snack",
      indoor: true,
      outdoor: false,
    },
    {
      id: 9,
      startAge: 24,
      endAge: 48,
      name: "ice cube transfer ",
      indoor: true,
      outdoor: true,
    },
    {
      id: 10,
      startAge: 12,
      endAge: 48,
      name: "Chasing bubbles",
      indoor: false,
      outdoor: true,
    },
  ]);
};
