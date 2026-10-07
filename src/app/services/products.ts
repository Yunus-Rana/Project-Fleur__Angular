import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { productsAPIResponse } from './productsDataType';

@Service()
export class Products {
    private http =  inject(HttpClient)

    apiUrl = "https://dummyjson.com/products?limit=40"
    
    getProducts(){
        return this.http.get<productsAPIResponse>(this.apiUrl)
    }

}
