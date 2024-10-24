import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //propiedad de la clase llamada resultado, que es de tipo string. Se inicializa con una cadena vacía (''). Esta propiedad se utiliza para almacenar el texto o los símbolos que el usuario va introduciendo, y también se actualiza con el resultado de cualquier cálculo.
  resultado: string = '';

  constructor() {}
  //append funcion, agrega símbolos o números al final de la cadena almacenada en resultado, permitiendo que el contenido crezca a medida que el usuario interactúa con la aplicación
  append(symbol: string) {
    this.resultado += symbol;
  }

  clear() {
    // this es necesario para acceder a las propiedades y métodos de la clase
    this.resultado = '';
  }

  calculate() {
    try {
      this.resultado = eval(this.resultado);
      // evalúa el contenido de this.resultado, que contiene una expresión matemática como cadena (por ejemplo, "2+3*4").
    } catch (e) {
      this.resultado = 'Error';
    }
  }

}
