import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {NotFound} from './pages/not-found/not-found';
import {Products} from './pages/products/products';
import {Product} from './pages/product/product';
import {adminGuard} from './guards/admin-guard';
import {productsRoutes} from './pages/products/products.route';

export const routes: Routes = [
  //route par défaut
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:Home},
  {path:'about',component:About},
  {path:'contact',component:Contact},
  {path:'products',loadChildren:()=>import('./pages/products/products.route').then(m=>m.productsRoutes)},
  {path:'product/:id',component:Product},
  {path:'admin',canActivate:[adminGuard],loadChildren:()=>import('./pages/admin/admin.route').then(m=>m.adminRoutes)},
  //autre route qui n'existe pas dans l'appli renvoi vers une page notfound
  {path:'**',component:NotFound}
];
