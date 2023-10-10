import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iPassagem, iResultado } from '../models/iresultados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl = environment.apiUrl;

  constructor(private httpclient: HttpClient) {}

  getPassagens(search: any) : Observable<iResultado>{
    const params = search;

    return this.httpclient.get<iResultado>(`${this.apiUrl}/passagem/search`, { params });
  }
}
