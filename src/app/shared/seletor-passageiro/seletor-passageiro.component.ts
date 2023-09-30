import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss']
})
export class SeletorPassageiroComponent {
  @Input() Pessoa:string=''
  @Input() FaixaIdade: string = ''
  @Input() quantidade:number = 0
}
