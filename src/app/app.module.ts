import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './header/header.component';
import{ OverlayModule } from '@angular/cdk/overlay'
import{ CdkMenuModule } from '@angular/cdk/menu';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FavsComponent } from './favs/favs.component';
import { ReadComponent } from './read/read.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import axios from 'axios';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PagesComponent,
    HeaderComponent,
    UploadComponent,
    LoginComponent,
    PostsComponent,
    PerfilComponent,
    FavsComponent,
    ReadComponent,
    CreateLoginComponent,

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
