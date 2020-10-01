import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpclient: HttpClient) { }

  getAllFood(): Observable<any> {
    return this.httpclient.get(apiUrl);
  }

  getById(id): Observable<any> {
    return this.httpclient.get(`${apiUrl}/${id}`);
  }

  createFood(obj): Observable<any> {
    return this.httpclient.post(apiUrl, obj);
  }


  updateById(id, obj): Observable<any> {
    return this.httpclient.put(`${apiUrl}/${id}`, obj);
  }

  deleteById(id): Observable<any> {
    return this.httpclient.delete(`${apiUrl}/${id}`);
  }


  findByName(name): Observable<any> {
    return this.httpclient.get(`${apiUrl}?name=${name}`);
  }









}
