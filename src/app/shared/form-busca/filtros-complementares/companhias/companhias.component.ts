import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iCompanhia } from 'src/app/core/models/ipassagens';
import { CompanhiaService } from 'src/app/core/servicos/companhia-service.service';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss'],
})
export class CompanhiasComponent implements OnInit {
  companhias: iCompanhia[] = [];
  selecionadas: iCompanhia[] = [];

  companhiasControl: FormControl<number[] | null>;

  constructor(
    private companhiaService: CompanhiaService,
    private formBuscaService: FormBuscaService
  ) {
    this.companhiasControl = this.formBuscaService.obterControle<
      number[] | null
    >('companhias');
  }

  ngOnInit(): void {
    this.companhiaService.listar().subscribe((res) => {
      this.companhias = res;
    });
    this.companhiasControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.selecionadas = [];
      }
    });
  }
  alternarCompanhia(companhia: iCompanhia, checked: boolean): void {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter(comp => comp != companhia)
    } else {
      this.selecionadas.push(companhia)
    }
    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map(comp => Number(comp.id))
    })
  }

  companhiaSelecionada(companhia: iCompanhia): boolean {

    return this.selecionadas.includes(companhia)
  }


}
