import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegpropserviceService {

  constructor(private http: HttpClient) { }
  newproperty(data: any) {
    const body = {
      ptype: data.type,
      pplace: data.place,
      pvalue: data.value,
      parea: data.area,
      powner: data.owner
    }
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/property/regprop", body).pipe(map(res => res, { 'headers': headers }));

  }

  getAllProperties(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3000/property/getProperties").pipe(map(res => res, { 'headers': headers }));
  }
}
