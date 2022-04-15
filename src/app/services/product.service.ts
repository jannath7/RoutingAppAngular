import { importType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpOptions:any;

  constructor(private http:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }
  public getProducts():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  public getFeedbacks():Observable<any>{
    return this.http.get("http://localhost:4500/enquires")
  }
  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/products?type="+pattern)
  }
  postEnquiry(obj:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4500/enquires",obj,this.httpOptions);

}
}
