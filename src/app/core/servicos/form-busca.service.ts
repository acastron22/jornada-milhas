import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosDeBusca } from '../models/dados-de-busca';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(new Date(), [Validators.required]);

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(new Date(), [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null)
    });

    somenteIda.valueChanges.subscribe((somenteida) => {
      if (somenteida) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      } else {
        console.log('HabilitarDataVolta');
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity;
    });
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${
        criancas > 1 ? 's' : ''
      }`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${
        bebes > 1 ? 's' : ''
      }`;
    }

    return descricao;
  }

  getDescricaoPassagem() {
    let tipo = this.formBusca.get('tipo')?.value;

    return tipo;
  }

  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome ${nome} não existe`);
    }
    return control as FormControl<T>;
  }

  obterDadosDeBusca(): DadosDeBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda').value;
    const dadosBusca: DadosDeBusca = {
      pagina: 1,
      porPagina: 50,
      dataIda: dataIdaControl.toISOString(),
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<number>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
    };

    const dataVoltaControl = this.obterControle<Date>('dataVolta').value;

    if (dataVoltaControl.value) {
      dadosBusca.dataVolta = dataVoltaControl.toISOString();
    }

    const conexoesControl = this.obterControle<number>('conexoes');
    if (conexoesControl.value) {
      dadosBusca.conexoes = conexoesControl.value;
    }

    return dadosBusca;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      });
    }
    console.log('tipo de passagem alterada para: ' + tipo);
  }

  alterarValorOrigemDestino() {
    let origem = this.formBusca.get('origem')?.value;
    let destino = this.formBusca.get('destino')?.value;

    this.formBusca.get('destino')?.setValue(origem);
    this.formBusca.get('origem')?.setValue(destino);
    console.log(origem, destino);
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  get formValid() {
    return this.formBusca.valid;
  }
}
