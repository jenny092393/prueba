import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ServiceappService {

  constructor(public http: HttpClient) {
  }

 
 public getFotos(){
   return this.http.get<any>("https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25");
 }
}
