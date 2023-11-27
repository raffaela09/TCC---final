import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  email:string = '';
  password:string = '';
  error:boolean = false;
  constructor(private loginService:LoginService){}

  loginUser(){
   
    this.loginService.postlogin(this.email, this.password);
     
  }
}
