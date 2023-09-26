import { Component, Input, OnInit } from '@angular/core';
import { IPromocao } from 'src/app/core/models/iPromocao';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent{
  @Input()promocao!:IPromocao

  constructor() { }



}
