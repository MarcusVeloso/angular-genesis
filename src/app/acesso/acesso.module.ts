import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AcessoAppComponent } from './acesso.app.component';
import { AcessoRoutingModule } from './acesso.route';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AcessoService } from './services/acesso.service';
import { CustomFormsModule } from 'ngx-custom-validators';

@NgModule({
  declarations: [
    AcessoAppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AcessoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule, //NGX-CUSTOM-VALIDATORS
  ],
  providers:[
    AcessoService
  ]
})
export class AcessoModule { }