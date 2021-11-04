import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Fornecedor } from '../models/fornecedor';
import { CepConsulta, Endereco } from "../models/endereco";

@Injectable()
export class FornecedorService extends BaseService {

    fornecedor: Fornecedor = new Fornecedor();

    constructor(private http: HttpClient) { super() 
    
        this.fornecedor.nome = "Jurive Hillux"
        this.fornecedor.documento = "45615644036"
        this.fornecedor.ativo = true
        this.fornecedor.tipoFornecedor = 1
    }

    obterTodos(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    novoFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return this.http
                   .post(this.UrlServiceV1 + "fornecedores", fornecedor, this.ObterAuthHeaderJson())
                   .pipe(
                       map(super.extractData),
                       catchError(super.serviceError));
    }

    atualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    excluirFornecedor(id: string): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    atualizarEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http
                   .put(this.UrlServiceV1 + "fornecedores/endereco/" + endereco.id, endereco, super.ObterAuthHeaderJson())
                   .pipe(
                       map(super.extractData),
                       catchError(super.serviceError));
    }

    consultarCep(cep: string): Observable<CepConsulta>{
        return this.http
        .get<CepConsulta>(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(catchError(super.serviceError));
    }
}