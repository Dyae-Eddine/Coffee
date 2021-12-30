import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/';
import { ICoffee } from '../models/ICoffee';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {
  private apidata = new BehaviorSubject<ICoffee[]> (null);
  public apidata$ = this.apidata.asObservable();
  private _url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private http:HttpClient) { }

  getCoffee():Observable<ICoffee[]>{
    return this.http.get<ICoffee[]>(this._url);
  }
  setdata(data){
    this.apidata.next(data);
  }
}
