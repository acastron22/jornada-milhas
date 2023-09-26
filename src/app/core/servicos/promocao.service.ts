import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPromocao } from '../models/iPromocao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl:string = environment.apiUrl

  constructor(
    private httpClient:HttpClient
  ) { }

  listar():Observable<IPromocao[]>{
    return this.httpClient.get<IPromocao[]>(`${this.apiUrl}/promocoes`)
  }
}
