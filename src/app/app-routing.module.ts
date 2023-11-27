import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { UploadComponent } from './upload/upload.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { FavsComponent } from './favs/favs.component';
import { ReadComponent } from './read/read.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'pages', component:PagesComponent, canActivate: [AuthGuard]},
  {path:'upload', component:UploadComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'posts', component:PostsComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component:PerfilComponent, canActivate: [AuthGuard]},
  {path: 'favs', component:FavsComponent, canActivate: [AuthGuard]},
  {path: 'read', component:ReadComponent, canActivate: [AuthGuard]},
  {path: 'create-login', component:CreateLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
