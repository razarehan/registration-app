import { Component, OnInit } from '@angular/core';
import {AuthGardService} from './../../services/auth/auth-gard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthGardService ) {}

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
}
