import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {GridComponent} from '../Shared/Component/Grid/CustomerApp.Grid.component'

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    //FormsModule,
  ],
  exports: [GridComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
