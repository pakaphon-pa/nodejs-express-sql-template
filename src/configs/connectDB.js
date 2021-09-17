import Sequelize from "sequelize";
import Logger from "./logger";
import constant from "./constant";

export default new Sequelize(
  constant.DB_DATABASENAME,
  constant.DB_USERNAME,
  constant.DB_PASSWORD,
  {
    host: constant.DB_HOSTNAME,
    dialect: constant.DB_DIALECT,
    logging: (msg) => Logger.debug(msg),
    pool: {
      max: parseInt(constant.POOL_MAX, 10),
      min: parseInt(constant.POOL_MIN, 10),
      acquire: parseInt(constant.POOL_ACQUIRE, 30000),
      idle: parseInt(constant.POOL_IDLE, 10000),
    },
  }
);
