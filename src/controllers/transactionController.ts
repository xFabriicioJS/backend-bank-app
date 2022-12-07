import { Request, Response } from "express";
import AccountServiceImpl from "../services/accountService";
import TransactionServiceImpl from "../services/transactionService";

class TransactionController {
  async create(req: Request, res: Response) {
    try {
      const transaction = await TransactionServiceImpl.create(req);
      // Retornará um 201 (CREATED)
      return res.status(201).json(transaction);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const account = await AccountServiceImpl.findById(+id);
    return account ? res.status(200).json(account) : res.status(204).send();
  }

  async findAll(res: Response) {
    const transactions = await TransactionServiceImpl.findAll();
    return transactions.length > 0
      ? res.status(200).json(transactions)
      : res.status(204).send();
  }
}

export default new TransactionController();
