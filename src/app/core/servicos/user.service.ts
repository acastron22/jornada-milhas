import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { ICadastro } from '../models/icadastro';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<ICadastro | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  decodificarJWT() {
    const token = this.tokenService.retornarToken();

    const user = jwt_decode(token) as ICadastro;
    this.userSubject.next(user);
  }

  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
