import { Component, OnInit} from '@angular/core';
import {Supplier} from './CustomerApp.Supplier.model'
import{SupplierService} from './CustomerApp.Supplier.service'
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  templateUrl: './CustomerApp.Supplier.view.html'
})
export class SupplierComponent implements OnInit {
  /**
   *
   */
  constructor(private supservice:SupplierService) {
  }
  ngOnInit(){
this.getAllSupplier();
  }
  
  supplierModel:Supplier =new Supplier();
  suppliers:Array<Supplier>=new Array<Supplier>();
  formdata=new FormGroup({
  SupplierCode:new FormControl("",Validators.required),
  SupplierName:new FormControl("",Validators.compose([
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
 ])),
  SupplierQuantity: new FormControl(),
  SupplierDate: new FormControl()
 });

getAllSupplier()
{
  this.supservice.GetAllSupplier().subscribe(
    (
      result:Supplier[])=>this.suppliers=result,
     error=>console.log(error)
    );
}
  onClickSubmit(data) {
  this.supplierModel=data;
  this.supservice.SaveSupplier(this.supplierModel).subscribe(result=>
  {
    console.log(result);
  },error=>
  {
    console.log(error);
  }
  )
  }
}
