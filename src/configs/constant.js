export default {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || "development",
  DB_USERNAME: process.env.DB_USERNAME || "test",
  DB_PASSWORD: process.env.DB_PASSWORD || 1234,
  DB_DATABASENAME: process.env.DB_DATABASENAME || "dbname",
  DB_HOSTNAME: process.env.DB_HOSTNAME || "db",
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
  POOL_MAX: process.env.POOL_MAX || 10,
  POOL_MIN: process.env.POOL_MIN || 0,
  POOL_ACQUIRE: process.env.POOL_ACQUIRE || 30000,
  POOL_IDLE: process.env.POOL_IDLE || 10000,
};
