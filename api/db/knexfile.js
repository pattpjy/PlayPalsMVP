require("dotenv").config({ path: "../.env" });
console.log(process.env.DB_URL);
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_URL_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASSWORD_DEV,
      database: process.env.DB_DATABASE_DEV,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_URL_PROD,
      user: process.env.DB_USER_PROD,
      password: process.env.DB_PASSWORD_PROD,
      database: process.env.DB_DATABASE_PROD,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};
