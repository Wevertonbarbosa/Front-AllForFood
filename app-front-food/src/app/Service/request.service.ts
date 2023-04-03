import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './cliente';
import { Observable } from 'rxjs';
import { Produtos } from './produto';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private readonly APIcliente = 'http://localhost:8080/cliente';
  private readonly APIproduto = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

  postarDados(dados: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.APIcliente, dados);
  }
  postarDadosProduto(dados: Produtos): Observable<Produtos>{   
    return this.http.post<Produtos>(this.APIproduto, dados);
  }

  mostrarDados(){
    return this.http.get<Clientes[]>(this.APIcliente)
  }
  mostrarDadosProduto(){
    return this.http.get<Produtos[]>(this.APIproduto)
  }

}
