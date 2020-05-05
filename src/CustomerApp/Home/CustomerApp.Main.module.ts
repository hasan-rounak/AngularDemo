import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './CustomerApp.Home.component';
import { AboutComponent } from './CustomerApp.About.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class MainModule { }
