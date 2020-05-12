import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './CustomerApp.Customer.component';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from '../Shared/component/Loader/CustomerApp.Loader.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {CustomerService} from './CustomerApp.Customer.service';
import {LoaderInterceptor} from '../Shared/Service/CustomerApp.Loader.interceptor';
import {SharedModule} from '../Shared/CustomerApp.Shared.module';

@NgModule({
  declarations: [
    CustomerComponent,
    LoaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    HttpClientModule,
    SharedModule
  ],
  providers: 
  [CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }