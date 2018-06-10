import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, JsonpModule } from '@angular/http';
import {throwError as observableThrowError,  Observable, BehaviorSubject } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { FidsUser } from 'app/classes/fids-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
isLoggedIn = false;
user_api_url = 'https://localhost:7002/fids-service/api/mobile/user?callback=JSONP_CALLBACK';
// https://foi.inside.ups.com/fids-service/api/mobile/user?callback=JSONP_CALLBACK;

  private fidsUser = new BehaviorSubject<FidsUser>(null);

  constructor(private http: Http, private jsonp: Jsonp) { }

  public getFidsUser(): Observable<FidsUser> {
     return this.jsonp.request(this.user_api_url).pipe(
   //  return this.http.get(this.user_api_url).pipe(
       map(this.extractData)
      // , catchError(this.handleErrorObservable)
   )};


  // store the URL so we can redirect after logging in
  redirectUrl: string;

  loggedIn(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
   private extractData(res: Response) {
    const body = res.json();
    this.fidsUser.next(res.json());
    return body;
  }

   private handleErrorObservable(error: Response | any) {
     console.error(error.message || error);
     return observableThrowError(error.message || error);
   }
}
