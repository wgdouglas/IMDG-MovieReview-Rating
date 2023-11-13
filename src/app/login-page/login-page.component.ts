import { Component } from '@angular/core';
import { MovieAuthService } from '../services/movie-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private auth: MovieAuthService, private router: Router){}

username="";
password="";
  errorMsg!: string;
  ngOnInit(): void{

  }

login() {
  if(this.username.trim().length === 0){
    this.errorMsg = "Username is required";
  }
  else if(this.password.trim().length === 0){
    this.errorMsg = "Password is required";
  }else{
    this.errorMsg = "";
    let response = this.auth.login(this.username, this.password);
    if(response ===200){
      this.router.navigate(['home']);
    }
    if(response === 403){
      this.errorMsg = "Invalid Credentials";
    }
  }
}

}
