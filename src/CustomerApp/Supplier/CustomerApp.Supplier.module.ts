import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import {SupplierComponent} from './CustomerApp.Supplier.component';
import {SharedModule} from '../Shared/CustomerApp.Shared.module'
import {RouterModule} from '@angular/router';
import {SupplierService} from './CustomerApp.Supplier.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(SupplierRoutes),
    SharedModule
  ],
  providers: [SupplierService],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
