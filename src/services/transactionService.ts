import { AccountModel, TransactionModel } from "../database/models/dbmodels";
import ITransactionService from "./interfaces/ITransactionService";
import { Request } from "express";
import { TransactionType } from "./enums/TransactionType";

class TransactionServiceImpl implements ITransactionService {
  async findAll(): Promise<any> {
    const transactions = await TransactionModel.findAll();
    return transactions;
  }

  async findAllByAccount(idAccount: number): Promise<any> {
    const transactions = await TransactionModel.findAll({
      where: { idAccount },
    });
    return transactions;
  }

  async findById(id: number): Promise<any> {
    const transaction = await TransactionModel.findOne({
      where: { id },
      include: [{ model: AccountModel, as: "account" }],
    });
    return transaction;
  }

  async create(request: Request): Promise<any> {
    const { idAccount } = request.body;
    const { transactionType } = request.params;
    await this.findAccountById(idAccount);
    const { amount } = request.body;
    if (amount <= 0) {
      throw new Error("O valor da transação deve ser maior que zero.");
    }
    if (transactionType === TransactionType.TRANSFER) {
      console.log("teste");
      const { idAccountTarget } = request.body;
      await this.transfer(idAccountTarget, idAccount, amount);
    } else if (transactionType === TransactionType.DEPOSIT) {
      await this.deposit(idAccount, amount);
    } else {
      console.log(transactionType);
      throw new Error("Tipo de transação inválido.");
    }
  }

  async deposit(idAccount: number, amount: number): Promise<any> {
    if (amount > 2000) {
      throw new Error("O valor máximo para depósito é R$ 2000,00.");
    }
    await AccountModel.increment("balance", {
      by: amount,
      where: { id: idAccount },
    });
    const transaction = await TransactionModel.create({
      idAccount,
      transactionType: TransactionType.DEPOSIT,
      amount,
    });
    return transaction;
  }

  async transfer(
    idAccountTarget: number,
    idAccountOrigin: number,
    amount: number
  ): Promise<any> {
    // Verificando se as contas existem
    await this.findAccountById(idAccountTarget);
    const accountOrigin = await this.findAccountById(idAccountOrigin);

    // Verifica se a conta de origem tem saldo suficiente para realizar a transferência
    const balance: number = accountOrigin?.get("balance") as number;
    if (balance < amount) {
      throw new Error("Saldo insuficiente para realizar a transferência.");
    }
    // Operações de transferência
    AccountModel.increment("balance", {
      by: amount,
      where: { id: idAccountTarget },
    });
    AccountModel.decrement("balance", {
      by: amount,
      where: { id: idAccountOrigin },
    });
    // Criando a transação e salvando na DB
    await TransactionModel.create({
      idAccount: idAccountOrigin,
      transactionType: TransactionType.TRANSFER,
      idAccountTarget,
      amount,
    });
  }

  // Método auxiliar para verificar se a conta existe
  private async findAccountById(idAccount: number) {
    const account = await AccountModel.findOne({ where: { id: idAccount } });
    if (account === null) {
      throw new Error("Conta não encontrada.");
    }
    return account;
  }
}

export default new TransactionServiceImpl();
