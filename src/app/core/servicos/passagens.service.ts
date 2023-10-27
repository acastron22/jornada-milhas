import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iResultado } from '../models/iresultados';
import { Observable, map, take } from 'rxjs';
import { DadosDeBusca } from '../models/dados-de-busca';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl = environment.apiUrl;
  precoMin: number = 0;
  precoMax: number = 0;

  constructor(private httpclient: HttpClient) {}

  getPassagens(search: DadosDeBusca): Observable<iResultado> {
    const params = this.converterParametrosParaString(search);

    const obs = this.httpclient.get<iResultado>(
      `${this.apiUrl}/passagem/search?${params}`
    );
    obs.pipe(take(1)).subscribe((res) => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });

    return obs;
  }

  converterParametrosParaString(busca: DadosDeBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      })
      .join('&');
    return query;
  }
}
