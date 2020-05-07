import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './CustomerApp.Customer.component';
import {RouterModule} from '@angular/router';
import {GridComponent} from '../Shared/CustomerApp.Grid.component';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
