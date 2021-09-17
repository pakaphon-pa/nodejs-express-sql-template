import db from "../configs/connectDB";
import Sequelize from "sequelize";

const testModel = db.define(
  "test",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    tableName: "test",
  }
);

export default testModel;
