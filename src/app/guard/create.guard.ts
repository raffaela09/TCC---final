import { Injectable } from '@angular/core';
import { CreateLoginService } from '../services/create-login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate{

  constructor(private createloginService:CreateLoginService, private router: Router) {}
  // canActivate(): boolean {
  //   const isAuth = this.createloginService.isContaCriada();
    
  //   if (!isAuth) {
  //     this.router.navigate(['/create-login']); 
  //     return false;
  //   }
    

  //   return true;
  // }
}
