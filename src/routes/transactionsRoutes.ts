import express from "express";
import TransactionController from "../controllers/transactionController";

const transactionsRouter = express.Router();

transactionsRouter.post("/transactions/:tipo", TransactionController.create);

transactionsRouter.get("/transactions", TransactionController.findAll);

transactionsRouter.get("/transactions/:id", TransactionController.findById);

export { transactionsRouter };
