import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST!,
    port: parseInt(process.env.DATABASE_PORT!),
  }
);
