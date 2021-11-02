import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoGuard } from '../services/acesso.guard';
import { AcessoAppComponent } from './acesso.app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const acessoRouterConfig: Routes = [
  { path: '', component: AcessoAppComponent,
    children:[
      { path: 'registro', component: RegistroComponent, 
                          canActivate: [AcessoGuard],
                          canDeactivate: [AcessoGuard]
      },
      { path: 'login', component: LoginComponent, canActivate: [AcessoGuard] }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(acessoRouterConfig)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }