import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//modulo responsable para habilitar el sistema de enrutamiento.
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    //tabs: ruta principal http://tudominio.com/tabs, caragara el componente "TabsPage"
    path: 'tabs',
    component: TabsPage,

    //Definir las rutas hijas
    children: [
      {
        //en la navegacion http://tudominio.com/tabs/tab1
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        //loadChildren: Es decir que no cargue el codigo de una parte especifica de la aplicacion, hasta que el usuario realmente lo necesite se conoce como carga perezosa
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
