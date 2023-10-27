import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iResultado } from '../models/iresultados';
import { Observable, map, take } from 'rxjs';
import { DadosDeBusca } from '../models/dados-de-busca';
import { iPassagens } from '../models/ipassagens';
import { IRecomendados } from '../models/iRecomendados';

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

  obterPassagensDestaques(passagem: iPassagens[]): IRecomendados | undefined {
    if (!passagem.length) {
      return undefined;
    }
    let ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );
    let ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0];
    let maisBarata = ordenadoPorPreco[0];

    let ordenadoPorMedia = [...passagem].sort((a, b) => {
      let pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }

}
