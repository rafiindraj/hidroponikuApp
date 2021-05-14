import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this.http
      .post(url, data)
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