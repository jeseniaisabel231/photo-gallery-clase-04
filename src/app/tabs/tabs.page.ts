import { Component } from '@angular/core';
//Component: es una clase angular que define un componente

@Component({
  //'app-tabs' nombre con el cual se puede usar este componente en otras plantillas con la etiqueta <app-tabs></app-tabs>
  selector: 'app-tabs',

  //archivo html que contiene el diseño
  //en este archivo se define como se vera visualmente el componente
  templateUrl: 'tabs.page.html',

  //archivo que contiene los estilos especificos para ese componente
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

}
