import { iPassagens } from './../../core/models/ipassagens';
import { Component, OnInit } from '@angular/core';
import { BuscarService } from 'src/app/core/servicos/buscar.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  passagens: iPassagens[] = [];
  constructor(private passagemService: BuscarService) {}

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    this.passagemService.getPassagens(buscaPadrao).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      alert(`ha um total de ${this.passagens.length} passagens `);
    });

  }
}
