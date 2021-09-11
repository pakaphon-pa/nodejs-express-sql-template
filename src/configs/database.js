module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: parseInt(process.env.POOL_MAX, 10),
      min: parseInt(process.env.POOL_MIN, 10),
      acquire: parseInt(process.env.POOL_MIN, 30000),
      idle: parseInt(process.env.POOL_IDLE, 10000),
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    pool: {
      max: parseInt(process.env.POOL_MAX, 10),
      min: parseInt(process.env.POOL_MIN, 10),
      acquire: parseInt(process.env.POOL_ACQUIRE, 30000),
      idle: parseInt(process.env.POOL_IDLE, 10000),
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    pool: {
      max: parseInt(process.env.POOL_MAX, 10),
      min: parseInt(process.env.POOL_MIN, 10),
      acquire: parseInt(process.env.POOL_MIN, 30000),
      idle: parseInt(process.env.POOL_IDLE, 10000),
    },
  },
};
