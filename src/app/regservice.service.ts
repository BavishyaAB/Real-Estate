import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  registerUser(data: any) {
    const body = {
      name: data.name,
      password: data.passwd,
      email_id: data.email,
      contno: data.contno,
      addr: data.addr,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/register", body).pipe(map(res => res, { 'headers': headers }));
  }
}
