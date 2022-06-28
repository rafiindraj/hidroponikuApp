import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataLibService {
  constructor() {}
  //Using any
  public editDataDetails: any = [];
  public editIndex : any = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  private indexSource = new BehaviorSubject(this.editIndex);
  currentMessage = this.messageSource.asObservable();
  currentIndex = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  changeIndex(indexs: any){
    this.indexSource.next(indexs);
  }
}
