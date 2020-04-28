import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './CustomerApp.Customer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
