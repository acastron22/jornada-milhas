import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent implements OnInit {
  @Output() realizarBusca = new EventEmitter();

  constructor(public formBuscaService: FormBuscaService) {}
  ngOnInit(): void {}

  buscar() {
    if (this.formBuscaService.formValid) {
      const formBuscaValue = this.formBuscaService.obterDadosDeBusca();
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('O formulário precisa ser preenchido por completo');
    }
  }

  trocarValores() {
    console.log('trocando valores');
    this.formBuscaService.alterarValorOrigemDestino();
  }
}
