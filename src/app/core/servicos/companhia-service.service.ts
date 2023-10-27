import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCompanhia } from '../models/ipassagens';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanhiaService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<iCompanhia[]> {
    return this.httpClient.get<iCompanhia[]>(`${this.apiUrl}/companhias`)
  }
}
