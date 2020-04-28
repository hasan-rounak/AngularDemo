import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import {SupplierComponent} from './CustomerApp.Supplier.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
