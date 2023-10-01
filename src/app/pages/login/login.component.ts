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
    this.loginUsuario = this.loginForm.value;
    this.authService.autenticar(this.loginUsuario).subscribe({
      next: (value: ILogin) => {
        console.log('login realizado com sucesso', value);
        this.router.navigateByUrl('/');
      },
      error: () => {
        console.log('login sem sucesso');
      },
      complete: () => {
        console.log('login realizado com sucesso');
      },
    });
  }
  
}
