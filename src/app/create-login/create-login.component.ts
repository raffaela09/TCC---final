import { Component } from '@angular/core';
import { CreateLoginService } from '../services/create-login.service';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent {
  name:string = '';
  email:string = '';
  password:string = '';
  token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJyYWZhIiwiZW1haWwiOiJyYWZhZWxhLmZyYW5jb0Blc3R1ZGFudGUuaWZtcy5lZHUuYnIiLCJpYXQiOjE3MDA2MTEyODUsImV4cCI6MTcwMTIxNjA4NSwiYXVkIjoidXNlcnMiLCJpc3MiOiJsb2dpbiIsInN1YiI6IjExIn0.z39RYPM7pB_-JfpFQLWpVMpAX2ehrVc8MbnRtWj-r2s"
  constructor(public createloginService: CreateLoginService){}
  createUser(){
    this.createloginService.createlogin(this.name,this.email, this.password, this.token)
  }

}
