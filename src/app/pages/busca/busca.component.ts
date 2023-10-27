import { take } from 'rxjs';
import { iPassagens } from './../../core/models/ipassagens';
import { Component, OnInit } from '@angular/core';
import { DadosDeBusca } from 'src/app/core/models/dados-de-busca';
import { BuscarService } from 'src/app/core/servicos/buscar.service';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';
import { PassagensService } from 'src/app/core/servicos/passagens.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  passagens: iPassagens[] = [];
  constructor(
    private passagemService: PassagensService,
    private formBusca: FormBuscaService
  ) {}

  ngOnInit(): void {
    const buscaPadrao: DadosDeBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBusca.formValid
      ? this.formBusca.obterDadosDeBusca()
      : buscaPadrao;

    this.passagemService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.passagens = res.resultado;
        this.formBusca.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
      });
  }

  busca(ev: DadosDeBusca) {
    this.passagemService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }
}
