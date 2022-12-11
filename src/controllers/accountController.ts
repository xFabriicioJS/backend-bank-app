import { Request, Response } from "express";
import AccountServiceImpl from "../services/accountService";

class AccountController {
  async findAll(req: Request, res: Response) {
    const accounts = await AccountServiceImpl.findAll();
    return accounts.length > 0
      ? res.status(200).json(accounts)
      : res.status(204).send();
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const account = await AccountServiceImpl.findById(+id);
    return account ? res.status(200).json(account) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    try {
      const account = await AccountServiceImpl.create(req);
      // Retornará um 201 (CREATED)
      return res.status(201).json(account);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    console.log(req.params);
    const { id } = req.params;
    try {
      await AccountServiceImpl.update(req, +id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const account = await AccountServiceImpl.delete(+id);
    if (account) {
      return res.status(204).send();
    }
    return res.status(400).json("Conta não encontrada.");
  }
}

export default new AccountController();
