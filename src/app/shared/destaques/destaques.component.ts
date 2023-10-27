import { Component, Input } from '@angular/core';
import { iPassagens } from 'src/app/core/models/ipassagens';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.scss']
})
export class DestaquesComponent {
  @Input() destacadaPor: string = ''
  @Input() passagem?: iPassagens;
  @Input() variant: 'primary' | 'secondary' | 'default'  = 'primary'



}
