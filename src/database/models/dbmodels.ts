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
      len: {
        args: [3, 30],
        msg: "Nome deve ter entre 3 e 30 caracteres",
      },
      notNull: {
        msg: "Nome não pode ser nulo",
      },
    },
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [11, 11],
        msg: "CPF deve ter 11 dígitos",
      },
      notNull: {
        msg: "CPF não pode ser nulo",
      },
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

export const TransactionModel = db.define("transaction", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  transactionType: {
    type: DataTypes.ENUM("deposit", "transfer"),
    allowNull: false,
  },
  idAccount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idAccountTarget: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  amount: {
    type: DataTypes.DOUBLE(),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

// Relacionamentos
AccountModel.hasMany(TransactionModel, {
  foreignKey: "idAccount",
});
TransactionModel.belongsTo(AccountModel, {
  foreignKey: "idAccount",
});
