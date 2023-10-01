import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> SeletorPassageiroComponent),
    multi: true
  }]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() Pessoa: string = '';
  @Input() FaixaIdade: string = '';

  @Input() quantidade: number = 0;
  onChange = (val: number) => {};
  onTouche = () => {};

  writeValue(val: any): void {
    this.quantidade = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouche = fn;
  }


  incrementar() {
    this.quantidade += 1;
    this.onChange(this.quantidade);
    this.onTouche();
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade -= 1;
      this.onChange(this.quantidade);
      this.onTouche();
    }
  }
}
