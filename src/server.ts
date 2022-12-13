import express, { json } from "express";
import { db } from "./database/db";
import { TransactionModel, AccountModel } from "./database/models/dbmodels";
import { accountRouter } from "./routes/accountsRoutes";
import { transactionsRouter } from "./routes/transactionsRoutes";

const cors = require("cors");

const app = express();

app.use(cors());

AccountModel.sync();
TransactionModel.sync();

app.use(json());
app.use(accountRouter);
app.use(transactionsRouter);
app.listen(3000, async () => {
  await db.sync();
  console.log("Server running on port 3000");
});
