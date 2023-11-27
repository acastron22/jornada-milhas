import { BannerComponent } from './banner/banner.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardComponent } from './card/card.component';
import { CardDepoimentosComponent } from './card-depoimentos/card-depoimentos.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { PassagemComponent } from './passagem/passagem.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BannerComponent,
    BotaoControleComponent,
    CardBuscaComponent,
    CardComponent,
    CardDepoimentosComponent,
    ContainerComponent,
    DestaquesComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    ModalComponent,
    PassagemComponent,
    SeletorPassageiroComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    BannerComponent,
    BotaoControleComponent,
    CardBuscaComponent,
    CardComponent,
    CardDepoimentosComponent,
    ContainerComponent,
    DestaquesComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    ModalComponent,
    PassagemComponent,
    SeletorPassageiroComponent,
  ],
})
export class SharedModule {}
