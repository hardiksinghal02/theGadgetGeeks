import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})

export class ProductService{

  constructor(private http:HttpClient) {}

  getProductsByFeatures(category:string, features:object){

    return this.http.post<object[]>('http://localhost:3000/api/product/getproductbyfeatures?category='+category,features);
  }

  createProduct(data){
    return this.http.post<{id:string}>('http://localhost:3000/api/product/addproduct',data);
  }

  async getProductById(id:string, category: string){
    return await this.http.get('http://localhost:3000/api/product/getproductbyid?id='+id+'&category='+category).toPromise();

  }

  addFeatures(category, productId, data){
    return this.http.post<{id:string}>('http://localhost:3000/api/product/addfeatures?category='+category+'&id='+productId,data)
  }

  addFilters(data){
    return this.http.post<{id:string}>('http://localhost:3000/api/product/addFilters',data);
  }




}
