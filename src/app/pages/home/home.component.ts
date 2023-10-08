import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPromocao } from 'src/app/core/models/iPromocao';
import { PromocaoService } from 'src/app/core/servicos/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private servicoPromocao: PromocaoService,
    private router: Router
  ) {}
  promocoes: IPromocao[] = [];

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((response) => {
      this.promocoes = response;
      console.log(this.promocoes);
    });
  }

  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
