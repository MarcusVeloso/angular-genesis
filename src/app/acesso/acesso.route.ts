import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoAppComponent } from './acesso.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const acessoRouterConfig: Routes = [
  { path: '', component: AcessoAppComponent,
    children:[
      { path: 'cadastro', component: CadastroComponent },
      { path: 'login', component: LoginComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(acessoRouterConfig)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }