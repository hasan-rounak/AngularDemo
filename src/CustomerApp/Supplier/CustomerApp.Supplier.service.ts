import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Supplier } from './CustomerApp.Supplier.model';
import { Observable } from 'rxjs';

@Injectable()
export class SupplierService
{
/**
 *
 */
constructor(private http:HttpClient) {    
}
apiUrl:string= "http://localhost:3000/Supplier"; 

SaveSupplier(supp:Supplier):Observable<any>{
    return this.http.post(this.apiUrl,supp);
}
GetAllSupplier():Observable<Supplier[]>{
return this.http.get<Supplier[]>(this.apiUrl);
}




}

