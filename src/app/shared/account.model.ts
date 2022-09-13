import { Installment } from "./installment.model";

export class Account {
  name: string;
  amount: number;
  paid: number;
  installments: Installment[] = [];
  constructor(name: string, amount: number, paid: number, installments: Installment[]) {
    this.name = name;
    this.amount = amount;
    this.paid = paid;
    this.installments = installments;
  }
}