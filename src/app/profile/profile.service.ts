import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from './profile';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {
  constructor(private http: Http) {}
  profileUrl = 'https://conduit.productionready.io/api/profiles/';
  profile: Profile;
  nameterm: string = '';

  getProfile(): Observable<Profile> {
      return this.http.get(this.profileUrl+this.nameterm)
          .map((response:Response) => response.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public jsonObjToProfileObj(data: any): Profile { // <-- handles parsing the json object into a Profile object that we can work with
      this.profile = new Profile(
        data.profile.username, 
        data.profile.bio, 
        data.profile.following, 
        data.profile.image,
        data.profile.role,
        data.profile.gemsid
      );      
      return this.profile;
  }

}
