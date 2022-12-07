import { DataTypes } from "sequelize";
import { db } from "../db";

export const AccountModel = db.define("account", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 50],
    },
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11],
    },
  },
  balance: {
    type: DataTypes.DOUBLE(),
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});
