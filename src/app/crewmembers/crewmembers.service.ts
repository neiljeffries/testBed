import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Crewmember } from './crewmember';

//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';

@Injectable()
export class CrewmembersService {
    constructor(private http: Http) { }
    private crewmembersUrl = '../assets/MOCK_DATA.json';

    getCrewmembers(): Observable<Crewmember[]> {
        return this.http.get(this.crewmembersUrl)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    

    
}
