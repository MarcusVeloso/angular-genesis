import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistroComponent } from '../acesso/registro/registro.component';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class AcessoGuard implements CanDeactivate<RegistroComponent>, CanActivate {
  
  localStorageUtils = new LocalStorageUtils();

  constructor(private router:Router){}

  canActivate(){
    if(this.localStorageUtils.obterTokenUsuario()){
      this.router.navigate(['/home']);
    }
    
    return true;
  }
  
  canDeactivate(component: RegistroComponent,){
    if(component.mudancasNaoSalvas){
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
    }
    return true;
  }
}