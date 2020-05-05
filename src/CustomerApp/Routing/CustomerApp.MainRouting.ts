import { Routes } from '@angular/router';
import {AboutComponent} from '../Home/CustomerApp.About.component';
import {HomeComponent} from '../Home/CustomerApp.Home.component';

export const MainRoutes: Routes = [
  {path:"Home", component: HomeComponent},
  {path:"About", component: AboutComponent},
  {path:"Customer", 
  loadChildren : () => import('../Customer/CustomerApp.Customer.module').
  then(mod => mod.CustomerModule)},
  {path:"Supplier",
  loadChildren : () => import('../Supplier/CustomerApp.Supplier.module').
  then(mod => mod.SupplierModule)},
];


