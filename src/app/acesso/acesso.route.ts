import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoAppComponent } from './acesso.app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const acessoRouterConfig: Routes = [
  { path: '', component: AcessoAppComponent,
    children:[
      { path: 'registro', component: RegistroComponent },
      { path: 'login', component: LoginComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(acessoRouterConfig)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }