import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/shared/account.model';
import { Installment } from 'src/app/shared/installment.model';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  @ViewChild('f') editAccForm!: NgForm;
  editedAccount!: Account;
  editedAccountIndex!: number;
  subscription!: Subscription;

  isPaidB1 = false;
  isPaidB2 = false;
  isPaidB3 = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.subscription = this.accountService.startAccountEditing
      .subscribe((index: number) => {
        this.editedAccount = this.accountService.getAccountDetails(index);
        this.editedAccountIndex = index;
        this.isPaidB1 = this.editedAccount.installments[0].isPaid;
        this.isPaidB2 = this.editedAccount.installments[1].isPaid;
        this.isPaidB3 = this.editedAccount.installments[2].isPaid;
        this.editAccForm.setValue({
          name: this.editedAccount.name,
          b1: this.editedAccount.installments[0].amountBreak,
          b2: this.editedAccount.installments[1].amountBreak,
          b3: this.editedAccount.installments[2].amountBreak,
        });
      });
  }

  onCancel() {
    this.editAccForm.reset();
    this.accountService.editedMode.next(false);
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    let paid = 0;
    for(let installment of this.editedAccount.installments) {
      if(installment.isPaid) {
        paid += installment.amountBreak;
      }
    }
    const updatedAccountDetails = new Account(value.name, this.editedAccount.amount, paid, 
                  [
                    new Installment(value.b1, this.isPaidB1),
                    new Installment(value.b2, this.isPaidB2),
                    new Installment(value.b3, this.isPaidB3),
                  ])
    this.accountService.updateAccount(this.editedAccountIndex, updatedAccountDetails);
  }
}
