import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerDto} from './CustomerApp.Customer.model';

@Injectable(
  )
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  apiUrl:string= "http://localhost:3000/Customer"; 

  GetAllCustomers():Observable<CustomerDto[]>{
   return this.http.get<CustomerDto[]>(this.apiUrl);
  }
  SaveCustomer(customer:CustomerDto):Observable<any>{
    return this.http.post(this.apiUrl,customer);
  }
 
}
