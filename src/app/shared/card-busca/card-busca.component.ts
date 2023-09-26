import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent{
  @Input()destino:string = ''
  @Input()imagem:string = ''
  @Input()preco:number = 0

  constructor() { }



}
