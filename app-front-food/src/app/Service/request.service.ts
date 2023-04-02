import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private readonly API = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }

  postarDados(dados: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.API, dados);
  }

}
