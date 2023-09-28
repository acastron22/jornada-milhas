import { Component, OnInit } from '@angular/core';
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
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService
  ) {}
  openDialog() {
    this.dialog.open(ModalComponent);
  }

  ngOnInit(): void {
    
  }
}
