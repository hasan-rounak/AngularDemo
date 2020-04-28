import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import {RouterModule} from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPage.component';
import { HomeComponent } from './CustomerApp.Home.component';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
