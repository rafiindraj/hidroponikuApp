
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BaseService {
  constructor(public http: HttpClient) { }

  getData(url: any, headers:any): Observable<any> {
    return this.http
      .get(url,{headers:headers})
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  getDataParam(url: any, params: any, headers:any): Observable<any> {
    return this.http
      .get(url, { params: params, headers:headers })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  createData(url: any, data: any,headers:any) : Observable<any> {
    return this.http
      .post(url, data,{headers:headers})
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  createDataParam(url: any, data: any, params: any,headers:any): Observable<any> {
    return this.http
      .post(url, data, { params: params, headers:headers })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  updateData(url: any, data: any,headers:any): Observable<any> {
    return this.http
      .put(url, data,{headers:headers})
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  updateDataParam(url: any, data: any, params: any,headers:any): Observable<any> {
    return this.http
      .put(url, data, { params: params, headers:headers })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }
  deleteData(url: any, data: any,headers:any): Observable<any> {
    return this.http
      .delete(url + "/" + data,{headers:headers})
      .pipe(map(response => response), catchError((err: any) => this.handleError(err.message)));
  }

  handleError(error: any) {
    return throwError(error.message || 'this error')
  }
}