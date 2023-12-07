import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  backend = 'http://localhost:5229'

  constructor(private http: HttpClient) { }

  post(url: string, obj: any) {
    return this.http
      .post(this.backend + url, obj)
  }
  get(url:string) {
    return this.http
      .get(this.backend + url)
  }
}