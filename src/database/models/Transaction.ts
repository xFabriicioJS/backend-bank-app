import { DataTypes } from "sequelize";
import { db } from "../db";

export const TransactionModel = db.define("transaction", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idAccount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transactionType: {
    type: DataTypes.ENUM("deposit", "transfer"),
    allowNull: false,
  },
  amount: {
    type: DataTypes.DOUBLE(),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});
