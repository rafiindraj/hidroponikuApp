import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
headers_object.append("Authorization", "Basic " + btoa("rakapermanaputraa@gmail.com:rakacopo@123"));
const httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
    headers: headers_object
  };
@Injectable()
export class BaseService {
  constructor(private http: HttpClient) {}

  getData(url:any):Observable<any> {
    return this.http
      .get(url)
      .pipe(map(response => response),catchError(this.handleError))
  }
  getDataParam(url:any, params:any) {
    return this.http
      .get(url, { params: params })
      .pipe(map(response => response),catchError(this.handleError))
  }
  createData(url:any, data:any) {
    debugger
    return this.http
      .post(url, data, httpOptions)
      .pipe(map(response => response),catchError(this.handleError))
  }
  createDataParam(url:any, data:any, params:any) {
    return this.http
      .post(url, data, { params: params })
      .pipe(map(response => response),catchError(this.handleError))
  }
  updateData(url:any, data:any) {
    return this.http
      .put(url, data)
      .pipe(map(response => response),catchError(this.handleError))
  }
  updateDataParam(url:any, data:any, params:any) {
    return this.http
      .put(url, data, { params: params })
      .pipe(map(response => response),catchError(this.handleError))
  }
  deleteData(url:any, data:any) {
    return this.http
      .delete(url + "/" + data)
      .pipe(map(response => response),catchError(this.handleError))
  }

  handleError(error:any){
    return throwError(error.message || 'this error')
  }
}