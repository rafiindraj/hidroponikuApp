import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Configuration } from './config';
// import { environment } from '../src/environments/environment'
var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
headers_object.append("Authorization", "Basic " + btoa("rakapermanaputraa@gmail.com:rakacopo@123"));
const httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
    headers: headers_object
  };
@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
    // private prefixUrl = environment.domain + environment.jv.intGwPathPrefix
    
  constructor(http : HttpClient) {
    super(http);
   }

  getProductbyPage(type, page, perpage){
    let body = {type : type, page: page, perpage: perpage }
    // let headers = {httpOptions}
    return this.createData(Configuration.APP_URL + Configuration.PRODUCT,body);
  }
}
