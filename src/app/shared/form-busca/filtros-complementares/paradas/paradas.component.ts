import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iOpcoes } from 'src/app/core/models/iOpcoes';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.scss'],
})
export class ParadasComponent implements OnInit {
  opcoesSelecionadas: iOpcoes | null = null;
  opcoes: iOpcoes[] = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];

  conexoesControl: FormControl<number | null>;

  constructor(private FormBuscaService: FormBuscaService) {
    this.conexoesControl =
      this.FormBuscaService.obterControle<number>('conexoes');
  }
  ngOnInit(): void {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (value === null) {
        this.opcoesSelecionadas = null;
      }
    });
  }

  alternarParada(opcao: iOpcoes, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionadas = null;
      this.FormBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      return;
    }
    this.opcoesSelecionadas = opcao;
    this.FormBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
  }

  paradaSelecionada(opcao: iOpcoes): boolean {
    return this.opcoesSelecionadas === opcao;
  }

  incluirParada(opcao: iOpcoes) {
    if (!this.opcoesSelecionadas) {
      return false;
    }
    return this.opcoesSelecionadas.value > opcao.value;
  }
}
