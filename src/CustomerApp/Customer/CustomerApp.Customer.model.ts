import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
//Create: Create Validation Object Model
//Connect: Connect Validation Object Model with UI
//Check: ISValid, Isdirty

export class Customer {
CustomerCode:string= "";
CustomerName:string="";
CustomerAmount:number;
customerFormGroup:FormGroup=null;
constructor(){
 let builder = new FormBuilder();
 this.customerFormGroup= builder.group({});
 // Single Validation
 this.customerFormGroup.addControl("CustomerNameControl", new FormControl('',Validators.required));
 //Multiple Validation
 let customerCodeValidator = [];
 customerCodeValidator.push(Validators.required);
 customerCodeValidator.push(Validators.pattern("^[0-9]{1,4}$"));
 this.customerFormGroup.addControl("CustomerCodeControl", new FormControl('',Validators.compose(customerCodeValidator)));
}
}

export class CustomerDto{
    CustomerCode:string= "";
    CustomerName:string="";
    CustomerAmount:number;  
}