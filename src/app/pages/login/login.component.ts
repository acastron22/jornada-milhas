import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/models/ILogin';
import { AutenticacaoService } from 'src/app/core/servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  loginUsuario = {} as ILogin;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log('Autenticado com sucesso', value);
          this.router.navigateByUrl('/');
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Problema na autenticação', err);
        },
        complete: () => {},
      });
    }
  }
}
