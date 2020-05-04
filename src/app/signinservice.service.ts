import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SigninserviceService {

  constructor(private http:HttpClient) { }
  
  validate(data: any) {
    console.log(data)
    const body = {
      password: data.passwd,
      contact: data.phno
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/signin",body).pipe(map(res => res, {'headers': headers}));
  }
}
