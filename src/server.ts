import express, { json } from "express";
import { db } from "./database/db";
import { TransactionModel } from "../src/database/models/Transaction";
import { AccountModel } from "./database/models/Account";
import { router } from "./routes/accountsRoutes";
const app = express();
TransactionModel.sync();
AccountModel.sync();
app.use(json());
app.use(router);
app.listen(3000, async () => {
  await db.sync();
  console.log("Server rodando na porta 3000");
});
