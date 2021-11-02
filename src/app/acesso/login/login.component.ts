import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';  
import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from '../models/usuario';
import { AcessoService } from '../services/acesso.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
    loginForm: FormGroup;
    usuario: Usuario;
    errors: any[] =  [];
  
    validationMessages: ValidationMessages;
    genericValidator: GenericValidator;
    displayMessage: DisplayMessage = {};
  
    constructor(private fb: FormBuilder,
      private acessoService: AcessoService,
      private router:Router,
      private toastr: ToastrService) { 
  
        this.validationMessages = {
          email: {
            required: 'Informe o e-mail',
            email: 'Email inválido'
          },
          password: {
            required: 'Informe a senha',
            rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
          }
        };
    
        this.genericValidator = new GenericValidator(this.validationMessages);
  
      }
    
    ngOnInit(): void {  
      
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password:[ '', [Validators.required, CustomValidators.rangeLength([6, 15])]],
      });
    }
  
  
    ngAfterViewInit(): void {
      let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
  
      merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);
      });
    }
  
    login(){
      if (this.loginForm.dirty && this.loginForm.valid) {
        this.usuario = Object.assign({}, this.usuario, this.loginForm.value);
  
        this.acessoService
            .login(this.usuario)
            .subscribe(
              sucesso => {this.processarSucesso(sucesso)},
              falha => {this.processarFalha(falha)}
            );
      }
    }
  
    processarSucesso(response: any) {
      this.loginForm.reset();
      this.errors = [];
      response.then(teste => {
        console.log(teste)
      });
  
      this.acessoService.LocalStorage.salvarDadosLocaisUsuario(response);
  
      let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
      if(toast){
        toast.onHidden.subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    }
  
    processarFalha(fail: any){
      this.errors = fail.error.errors;
      this.toastr.error('Ocorreu um erro!', 'Opa :(');
    }
  
  }
  