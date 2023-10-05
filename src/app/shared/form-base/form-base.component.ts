import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IEstados } from 'src/app/core/models/IEstados';
import { FormularioService } from 'src/app/core/servicos/formulario.service';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<IEstados | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Input() titulo: string = '';
  @Input() textoBotao: string = '';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [null, Validators.required],
      nascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: [null],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      confirmarSenha: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('senha'),
        ],
      ],
      aceitarTermos: [null, Validators.requiredTrue],
    });

    if (this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators(Validators.requiredTrue);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  deslogar() {
    this.sair.emit();
  }
}
