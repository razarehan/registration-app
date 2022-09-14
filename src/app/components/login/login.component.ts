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

    eye_open = true;
    eye_close = false;
    inputType="password";
  
  ngOnInit() {
    if(this.authService.isLoggedIn()) {    
      this.router.navigate(['dashboard']);
      return;
    }
  }
  showpass(){
    if (this.eye_open) {
      this.eye_open = false;
      this.eye_close = true;
      this.inputType="text";
    }
    else{
      this.eye_open = true;
      this.eye_close = false;
      this.inputType="password";
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
