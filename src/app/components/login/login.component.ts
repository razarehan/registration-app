import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGardService} from './../../services/auth/auth-gard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  keepMeLoggedIn:boolean = true;
  constructor(private authService: AuthGardService, 
    private router: Router, ) { }

  
  ngOnInit() {
    if(this.authService.isLoggedIn()) {    
      this.router.navigate(['dashboard']);
      return;
    }
  }

  onSubmit(form: NgForm): void {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    this.authService.login(email, password, this.keepMeLoggedIn).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['dashboard']);
    }, error => {
      console.log(error);
    })
    form.reset();
  }

}
