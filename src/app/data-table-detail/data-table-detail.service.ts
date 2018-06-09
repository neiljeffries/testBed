
import {throwError as observableThrowError,  Observable } from 'rxjs';
/*
Remember to add DataTableDetailService to providers in your app.module!
*/
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';




@Injectable()
export class DataTableDetailService {

  private url = 'ssets/data/100k.json';
  constructor(private http: Http) { }

  // getData(): Observable<Person[]> {
  //   return this.http.get(this.url)
  //     .map(this.extractData)
  //     .catch(this.handleErrorObservable);
  // }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return observableThrowError(error.message || error);
  }
}
