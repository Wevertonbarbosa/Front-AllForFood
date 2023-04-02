import { Routes } from '@angular/router';
import { MenuPage } from './Pages/tab/menu/menu.page';


export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./Pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cliente',
        loadComponent: () => import('./Pages/pagina/cliente/cliente.page').then( m => m.ClientePage)
      },
      {
        path: 'page-loja',
        loadComponent: () => import('./Pages/loja/page-loja/page-loja.page').then( m => m.PageLojaPage)
      },
      {
        path: 'page-produtos',
        loadComponent: () => import('./Pages/produtos/page-produtos/page-produtos.page').then( m => m.PageProdutosPage)
      },
      {
        path: 'page-pedido',
        loadComponent: () => import('./Pages/pedido/page-pedido/page-pedido.page').then( m => m.PagePedidoPage)
      },
    ],
  },
    
];
