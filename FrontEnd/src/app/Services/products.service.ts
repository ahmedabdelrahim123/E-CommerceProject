import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/products";
  //Methods [All Requests]
  GetAllProducts(){
    return this.myClient.get(this.Base_URL);
  }
}

