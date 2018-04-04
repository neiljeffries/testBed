import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { Frog } from 'app/frog-dashboard/frog'

@Injectable()
export class FrogsService {

  public activeProject: ReplaySubject<any> = new ReplaySubject(1);
  public activeFrog: BehaviorSubject<any> = new BehaviorSubject(1);
  frog: Frog[];
  public pageResponse: Frog;
  constructor(private http: Http) {}

  public load(){
    
    this.http.get('http://time.jsontest.com/').subscribe(
      res => this.activeProject.next(res.json())
    );    

    let request = this.http.get('http://time.jsontest.com/')
    .map(res => {
      res = res.json()
            console.log(res)
    
    }).catch(res => Observable.throw(res.json()));


 
  }



 }