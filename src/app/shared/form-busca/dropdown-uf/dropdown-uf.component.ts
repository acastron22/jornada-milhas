import { IEstados } from 'src/app/core/models/IEstados';
import { UnidadeFederativaService } from './../../../core/servicos/unidade-federativa.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() matPrefix: string = '';

  unidadesFederativas:IEstados[] = []

  filteredOptions: string[] = [];

  constructor(private unidadeFederativaService:UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(dados => {
      this.unidadesFederativas = dados
      console.log(this.unidadesFederativas)
    })
  }
}
