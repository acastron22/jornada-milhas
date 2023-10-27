import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';
import { PassagensService } from 'src/app/core/servicos/passagens.service';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss'],
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagemService: PassagensService,
    private formBuscaSerice: FormBuscaService
  ) {
    this.precoMin = this.formBuscaSerice.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaSerice.obterControle<number>('precoMax');
  }
}
