import { Component,OnInit} from '@angular/core';
import {LoaderService} from '../../Service/CustomerApp.Loader.service';
import {Subject} from 'rxjs'

@Component({
  selector: "loader-ui",
  templateUrl: './CustomerApp.Loader.view.html'
})
export class LoaderComponent implements  OnInit{
  constructor(private loaderService:LoaderService){}

  ngOnInit(){
   this.loaderService.isLoading.subscribe(x=>
    {
      this.isLoading=x;
    });
   
  }
  public isLoading:boolean;
}