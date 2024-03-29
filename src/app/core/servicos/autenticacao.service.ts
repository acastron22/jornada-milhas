import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/ILogin';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment;

  constructor(private http: HttpClient, private userService:UserService) {}

  autenticar(email:string, senha:string): Observable<HttpResponse<AuthResponse>> {
    console.log(this.apiUrl.apiUrl);
    return this.http
      .post<AuthResponse>(`${this.apiUrl.apiUrl}/auth/login`, {email, senha}, {
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          const authToken = response.body?.access_token || '';
          this.userService.salvarToken(authToken)
        })
      );
  }
}
