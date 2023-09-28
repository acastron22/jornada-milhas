import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstados } from '../models/IEstados';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnidadeFederativaService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<IEstados[]>;

  listar(): Observable<IEstados[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestEstados(): Observable<IEstados[]> {
    return this.http.get<IEstados[]>(`${this.apiUrl}/estados`);
  }
}
