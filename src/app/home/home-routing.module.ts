import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pedido-detail',
    loadChildren: () => import('./pedido-detail/pedido-detail.module').then( m => m.PedidoDetailPageModule)
  },
  {
    path: 'tomar-pedido',
    loadChildren: () => import('./modal/tomar-pedido/tomar-pedido.module').then( m => m.TomarPedidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
