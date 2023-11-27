import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CreateLoginService } from './services/create-login.service';
import { LoginService } from './services/login.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


  isSideNavCollapsed = false;
  screenWidth = 0;
  usuariologin: any;
  mostrarMenu: Boolean = false;
  

  onToggleSideNav(data: SideNavToggle) : void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  

  constructor(private createloginService: CreateLoginService, private loginService:LoginService){}

  ngOnInit(){
    this.createloginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  

}
