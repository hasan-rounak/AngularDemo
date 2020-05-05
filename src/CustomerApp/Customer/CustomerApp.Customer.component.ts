import { Component } from '@angular/core';
import {Customer} from './CustomerApp.Customer.model';

@Component({
  templateUrl: './CustomerApp.Customer.view.html'
})
export class CustomerComponent {
  customer:Customer= new Customer();
  customers:Array<Customer>= new Array<Customer>();
  Add(){
    this.customers.push(this.customer);
    this.customer=new Customer();
  }
  HasError(validatorType:string,controlName:string) : boolean{
    return this.customer.customerFormGroup.controls[controlName].hasError(validatorType);
  }
}
