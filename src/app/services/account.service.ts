import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from '../shared/account.model';
import { Installment } from '../shared/installment.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  startAccountEditing = new Subject<number>();
  editedMode = new Subject<boolean>();
  accountsChanging = new Subject<Account[]>();
  private accounts = [
    new Account('Kundan Singh P', 3000, 2000, 
    [
      new Installment(1000, true),
      new Installment(1000, true),
      new Installment(1000, false)
    ]),
    new Account('Badal Das', 3000, 0, 
    [
      new Installment(1000, false),
      new Installment(1000, false),
      new Installment(1000, false)
    ]),
    new Account('Rehan', 3000, 1000, 
    [
      new Installment(1000, true),
      new Installment(1000, false),
      new Installment(1000, false)
    ])
  ]
  constructor() { }

  getAccounts() {
    return this.accounts.slice();
  }
  getAccountDetails(index: number) {
    return this.accounts[index];
  }
  updateAccount(index: number, newAccountDetails: Account) {
    this.accounts[index] = newAccountDetails;
    this.accountsChanging.next(this.accounts.slice());
  }
}