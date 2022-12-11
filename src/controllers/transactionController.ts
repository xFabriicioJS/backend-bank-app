import { Request, Response } from "express";
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
    const transaction = await TransactionServiceImpl.findById(+id);
    return transaction
      ? res.status(200).json(transaction)
      : res.status(204).send();
  }

  async findAllByAccount(req: Request, res: Response) {
    const { id } = req.params;
    const transactions = await TransactionServiceImpl.findAllByAccount(+id);
    return transactions.length > 0
      ? res.status(200).json(transactions)
      : res.status(204).send();
  }

  async findAll(_req: Request, res: Response) {
    const transactions = await TransactionServiceImpl.findAll();
    return transactions.length > 0
      ? res.status(200).json(transactions)
      : res.status(204).send();
  }
}

export default new TransactionController();
