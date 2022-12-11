import express, { json } from "express";
import { db } from "./database/db";
import { TransactionModel, AccountModel } from "./database/models/dbmodels";
import { accountRouter } from "./routes/accountsRoutes";
import { transactionsRouter } from "./routes/transactionsRoutes";

const cors = require("cors");

const app = express();

app.use(cors());

TransactionModel.sync();
AccountModel.sync();
app.use(json());
app.use(accountRouter);
app.use(transactionsRouter);
app.listen(3000, async () => {
  await db.sync();
  console.log("Server rodando na porta 3000");
});
