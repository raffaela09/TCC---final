import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CreateLoginService {
  private axiosInstance: AxiosInstance;
  mostrarMenuEmitter = new EventEmitter <Boolean>();
  ContaCriada: boolean = false;

  constructor(private router: Router) {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  createlogin(name: string, email: string, password: string, token: string) {
    this.axiosInstance.post('/users', {
      name: name,
      email: email,
      password: password
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      this.mostrarMenuEmitter.emit(true);
      this.ContaCriada = true;
      this.router.navigate(['/dashboard']);
      
      console.log(response.data);
    })
    .catch((error) => {
        console.error(error.response.data);
        this.mostrarMenuEmitter.emit(false);});
  }


isContaCriada(): boolean {
  return this.ContaCriada;
}
}
