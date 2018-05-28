
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare FlightsTableComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/
import { Http, Response, Jsonp, JsonpModule } from '@angular/http';
import { Injectable } from '@angular/core';


//import { Flight } from './flight';
import { FidsData } from '../classes/fids-data';


@Injectable()
export class FlightsService {

  private url = 'assets/data/100k.json';
  // tslint:disable-next-line:max-line-length
  // private url2 = 'https://localhost:7002/fids-service/api/aodsFlights/allFlights/sdf/10/120?showAlerts=true&ts=null&callback=JSONP_CALLBACK';
  private url2 = 'assets/data/fids-json-data.json';
  constructor(private http: Http,
  private jsonp: Jsonp) { }

  // getFlights(): Observable<Flight[]> {
  //   return this.http.get(this.url).pipe(
  //     map(this.extractData),
  //     catchError(this.handleErrorObservable),);
  // }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }


  getFlightsJsonp(): Observable<FidsData> {
   // return this.jsonp.request(this.url2)
    return this.http.get(this.url2).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable),);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return observableThrowError(error.message || error);
  }
}
