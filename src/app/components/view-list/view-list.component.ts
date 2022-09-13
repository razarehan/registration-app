import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/shared/account.model';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  accounts: Account[] = [];
  isHidden = true;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();
    this.accountService.accountsChanging.subscribe(
      (accounts) => {
        this.accounts = accounts;
      }
    );
    this.accountService.editedMode
      .subscribe((editedMode) => {
        this.isHidden = !editedMode;
      });
  }

  onEditAccount(index: number) {
    this.accountService.editedMode.next(true);
    this.accountService.startAccountEditing.next(index);
  }
}
