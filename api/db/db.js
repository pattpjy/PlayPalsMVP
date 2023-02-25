require("dotenv").config();

const knex = require("knex");

const knexfile = require("./knexfile");

const env = process.env.NODE_ENV;
const configOptions = knexfile[env];
console.log("db config", env, configOptions);

module.exports = knex(configOptions);
