import { Component,OnInit } from '@angular/core';
import { Customer, CustomerDto } from './CustomerApp.Customer.model';
import { CustomerService } from './CustomerApp.Customer.service';

@Component({
  templateUrl: './CustomerApp.Customer.view.html'
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) { }

  ngOnInit(){
    this.GetCustomers();
  }
  customer: Customer = new Customer();
  customers: Array<Customer> = new Array<Customer>();
  loading:boolean =false;
  Add() {
    this.SaveCustomer();
    //  this.customers.push(this.customer);
    // this.customer=new Customer();
  }

  HasError(validatorType: string, controlName: string): boolean {
    return this.customer.customerFormGroup.controls[controlName].hasError(validatorType);
  }

  DeleteCustomer(item: Customer) {
    this.customers = this.customers.filter(x => x != item);
  }

  SaveCustomer() {
    this.loading=true;
    let cust = new CustomerDto();
    cust.CustomerName = this.customer.CustomerName,
      cust.CustomerCode = this.customer.CustomerCode,
      cust.CustomerAmount = this.customer.CustomerAmount
    this.customerService.SaveCustomer(cust).subscribe(res => 
      {
        this.GetCustomers();
        this.customer=new Customer();
        this.loading=false;
      } 
      , err => 
      {
        console.log(err) ;
        this.loading=false;
      });
  }

  GetCustomers() {
    this.customerService.GetAllCustomers()
      .subscribe((res: Customer[]) => this.customers = res,err=> console.log(err));
  }
}
