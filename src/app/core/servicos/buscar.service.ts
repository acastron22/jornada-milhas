import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iResultados } from '../models/ipassagens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: any):Observable<iResultados> {
    const params = search;
    return this.httpClient.get<iResultados>(`${this.apiUrl}/passagem/search`, { params });
  }
}
