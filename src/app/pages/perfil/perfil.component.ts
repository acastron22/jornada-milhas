import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  titulo = 'Olá, Pessoa';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true
}