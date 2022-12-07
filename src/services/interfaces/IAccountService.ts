import { Request } from "express";

interface IAccountService {
  findAll(): Promise<any>;
  findById(id: number): Promise<any>;
  create(req: Request): Promise<any>;
  update(req: Request, id: number): Promise<any>;
  delete(id: number): Promise<any>;
}

export default IAccountService;
