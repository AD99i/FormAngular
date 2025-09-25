import {Routes} from '@angular/router';
import {Products} from './products';
import {Product} from '../product/product';

export const productsRoutes: Routes = [
  {path:'',component:Products},
  {path:'product/:id',component:Product},
  ]
