import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICadastro } from '../models/icadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrar(pessoaUsuaria: ICadastro): Observable<ICadastro> {
    return this.http.post<ICadastro>(
      `${this.apiUrl}/auth/cadastro`,
      pessoaUsuaria
    );
  }

  buscarCadastro(token: string): Observable<ICadastro> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<ICadastro>(`${this.apiUrl}/auth/perfil`, { headers });
  }
  editarCadastro(
    pessoaUsuaria: ICadastro,
    token: string
  ): Observable<ICadastro> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<ICadastro>(
      `${this.apiUrl}/auth/perfil`,
      pessoaUsuaria,
      { headers }
    );
  }
}
