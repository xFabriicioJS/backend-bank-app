import { Request } from "express";

interface ITransactionService {
  findAll(): Promise<any>;
  create(request: Request): Promise<any>;
  transfer(
    idAccountTarget: number,
    idAccountOrigin: number,
    amount: number
  ): Promise<any>;
}

export default ITransactionService;
