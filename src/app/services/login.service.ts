
import { EventEmitter, Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import axios from 'axios'




@Injectable({
  providedIn: 'root'
})

export class LoginService {
  mostrarMenuEmitter = new EventEmitter <Boolean>();
  usuarioAutenticado: boolean = false;
  
  constructor(private router: Router){}
  
   url = "http://localhost:3000";


  postlogin(email:string, password:string) {
    axios.post( 'http://localhost:3000/auth/login', {
      email:email, 
      password: password
    })
    .then( (response) => {
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/dashboard']);
      this.usuarioAutenticado = true;
      console.log(response.data);
    })
    .catch((error) => {
        console.error(error.response.data);
        this.mostrarMenuEmitter.emit(false);
        throw error;

      }
    );
}


isUsuarioAutenticado(): boolean {
  return this.usuarioAutenticado;
}
}

