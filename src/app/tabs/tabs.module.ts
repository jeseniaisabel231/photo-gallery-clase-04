import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
//NgModule: permite definir un modulo en angular

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//permite trabajar con formularios en angular 

import { TabsPageRoutingModule } from './tabs-routing.module';
//contiene las rutas especificas para el componente

import { TabsPage } from './tabs.page';
//será declarado dentro del módulo, permitiendo su uso dentro del módulo correspondiente.

@NgModule({
  //en este decorador se listan modulos que este modulo necesitara 
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  //declaracion de componentes que pertenecen a este modulo
  declarations: [TabsPage]
})
export class TabsPageModule {}
