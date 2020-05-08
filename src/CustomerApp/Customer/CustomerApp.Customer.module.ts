import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './CustomerApp.Customer.component';
import {RouterModule} from '@angular/router';
import {GridComponent} from '../Shared/CustomerApp.Grid.component';
import {HttpClientModule} from '@angular/common/http'
import {CustomerService} from './CustomerApp.Customer.service';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
