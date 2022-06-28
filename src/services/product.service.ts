import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Configuration } from './config';
// import { environment } from '../src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
    // private prefixUrl = environment.domain + environment.jv.intGwPathPrefix
    
  constructor(http : HttpClient) {
    super(http);
   }

  //  createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa('rakapermanaputraa@gmail.com:rakacopo@123')); 
  // }

  getProductbyPage(type, page, perpage){
    // let headers = new Headers()
    // this.createAuthorizationHeader(headers)
    let httpHeaders = new HttpHeaders();
    // httpHeaders = httpHeaders.append("Authorization", "Basic " +  btoa("rakapermanaputraa@gmail.com:rakacopo@123"));
    httpHeaders = httpHeaders.append("Content-Type", "multipart/form-data");
    let body = {type : type, page: page, perpage: perpage }
    return this.createData(Configuration.APP_URL + Configuration.PRODUCT,body,httpHeaders);
  }
}
