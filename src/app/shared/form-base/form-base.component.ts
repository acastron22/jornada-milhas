import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IEstados } from 'src/app/core/models/IEstados';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<IEstados | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any>= new EventEmitter<any>

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [null, Validators.required],
      nascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: [this.estadoControl],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, Validators.requiredTrue],
    });
  }

  executarAcao() {
    this.acaoClique.emit()
  }
}
