import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICadastro } from 'src/app/core/models/icadastro';
import { CadastroService } from 'src/app/core/servicos/cadastro.service';
import { FormularioService } from 'src/app/core/servicos/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro()?.value;
    if (formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as ICadastro
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('cadastro realizado com sucesso', value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completado o subscribe');
        },
      });
    }
  }
}
