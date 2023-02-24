require('dotenv').config({path: '../.env'})
console.log(process.env.DB_URL)
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },
}
