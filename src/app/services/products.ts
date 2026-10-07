import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Products {
    private http =  inject(HttpClient)

    apiUrl = "https://dummyjson.com/products"
    
    getProducts(){
        return this.http.get(this.apiUrl)
    }

}
