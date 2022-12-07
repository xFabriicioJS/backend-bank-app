import { Request } from "express";
import { AccountModel } from "../database/models/dbmodels";
import IAccountService from "./interfaces/IAccountService";

class AccountService implements IAccountService {
  async findAll(): Promise<any> {
    const accounts = await AccountModel.findAll();
    return accounts;
  }

  async findById(id: number): Promise<any> {
    const account = await AccountModel.findOne({ where: { id } });
    return account;
  }

  async create(req: Request): Promise<any> {
    const { name, cpf } = req.body;

    // Verifica se já existe uma conta associada ao CPF informado
    if ((await this.findByCpf(cpf)) !== null) {
      throw new Error("Uma conta já existe com o CPF informado.");
    }

    const account = await AccountModel.create({
      name,
      cpf,
    });

    return account;
  }

  async update(req: Request, id: number): Promise<any> {
    // Verifica se já existe uma conta com o CPF informado e se essa conta não é da conta que está sendo atualizado
    if (
      (await this.findByCpf(req.body.cpf)) !== null &&
      (await this.findByCpf(req.body.cpf)) !== id
    ) {
      throw new Error(
        "Já existe uma conta diferente associada ao CPF informado."
      );
    }

    // Se passar pela verifação acima, atualizamos a conta
    const { nome, cpf } = req.body;
    await AccountModel.update(
      {
        nome,
        cpf,
      },
      { where: { id } }
    );
  }

  async delete(id: number): Promise<any> {
    const account = await AccountModel.destroy({ where: { id } });
    return account;
  }

  // Método auxiliar para verificar contas existentes com o CPF informado.
  async findByCpf(cpf: string) {
    const account = await AccountModel.findOne({ where: { cpf } });
    if (account !== null) {
      return account.get().id;
    }
    return null;
  }
}

export default new AccountService();
