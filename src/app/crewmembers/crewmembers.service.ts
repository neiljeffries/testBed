
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Crewmember } from './crewmember';

@Injectable()
export class CrewmembersService {
    constructor(private http: Http) { }
    private crewmembersUrl = '../assets/MOCK_DATA.json';

    getCrewmembers(): Observable<Crewmember[]> {
        return this.http.get(this.crewmembersUrl).pipe(
            map((response: Response) => response.json()),
            catchError((error: any) => observableThrowError(error.json().error || 'Server error')),);
    }

    

    
}
