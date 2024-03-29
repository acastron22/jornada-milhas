import { IEstados } from 'src/app/core/models/IEstados';
import { UnidadeFederativaService } from '../../core/servicos/unidade-federativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

  unidadesFederativas: IEstados[] = [];

  filteredOptions$?: Observable<IEstados[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
      console.log(this.unidadesFederativas);
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }
  displayFn(estado:IEstados):string {
    return estado && estado.nome? estado.nome : ''
  }

  filtrarUfs(value: string | IEstados): IEstados[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }
}
