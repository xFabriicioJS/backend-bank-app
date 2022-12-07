import express from "express";
import TransactionController from "../controllers/transactionController";

const router = express.Router();

router.post("/transactions/:tipo", TransactionController.create);

router.get("/transactions", TransactionController.findAll);

router.get("/transactions/:id", TransactionController.findById);

export { router };
