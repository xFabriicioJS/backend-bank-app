import express from "express";
import TransactionController from "../controllers/transactionController";

const transactionsRouter = express.Router();

transactionsRouter.post(
  "/transactions/:transactionType",
  TransactionController.create
);

transactionsRouter.get("/transactions", TransactionController.findAll);

transactionsRouter.get("/transactions/:id", TransactionController.findById);

transactionsRouter.get(
  "/transactions/account/:id",
  TransactionController.findAllByAccount
);

export { transactionsRouter };
