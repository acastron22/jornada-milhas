import { Component, Input } from '@angular/core';
import { IEstados } from 'src/app/core/models/IEstados';
import { iPassagens } from 'src/app/core/models/ipassagens';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss'],
})
export class PassagemComponent {
  @Input() passagem!: iPassagens;

  get textoIdaVolta(){
    if(!this.passagem.dataVolta){
      return "Somente ida"
    }
      return "Ida e volta"
  }
}
