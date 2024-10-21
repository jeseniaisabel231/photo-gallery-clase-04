import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  resultado: string = '';

  constructor() {}

  append(symbol: string) {
    this.resultado += symbol;
  }

  clear() {
    this.resultado = '';
  }

  calculate() {
    try {
      this.resultado = eval(this.resultado);
    } catch (e) {
      this.resultado = 'Error';
    }
  }

}
