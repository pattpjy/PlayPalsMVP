require("dotenv").config({ path: "../.env" });
console.log(process.env.DB_URL);
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_URL,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "activities_dev",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },

  production: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};
