import { Routes } from '@angular/router';
import { CustomerComponent } from '../Customer/CustomerApp.Customer.component';

export const CustomerRoutes: Routes = [
  {path:"Add", component: CustomerComponent},
  {path:"", component: CustomerComponent}
  ];


