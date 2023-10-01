import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/ILogin';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment

  constructor(private http:HttpClient) { }

  autenticar(login:ILogin):Observable<ILogin>{
    console.log(this.apiUrl.apiUrl)
    return this.http.post<ILogin>(`${this.apiUrl.apiUrl}/auth/login`, login)
  }
}
