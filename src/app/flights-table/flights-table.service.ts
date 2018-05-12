/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare FlightsTableComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Flight } from './flight';

@Injectable()
export class FlightsService {

  private url = "assets/data/100k.json";
  constructor(private http:Http) { }
  
  getFlights(): Observable<Flight[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
