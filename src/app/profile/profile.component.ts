import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: Profile;
  showId = false;
  termsearch = '';
  constructor(private profileService: ProfileService) {}

  loadUser(searchVal): void {
    this.profileService.nameterm = searchVal;
    console.log(this.profileService.nameterm );
     this.profileService.getProfile()
     .subscribe(
        profile => {
          this.profile = this.profileService.jsonObjToProfileObj(profile);
          // this.profile = new Profile;
          this.profile.username = profile.username;
          console.log(this.profile);
          console.log('this.profile.username=' + this.profile.username);
        }, // Bind to view
        err => {
        console.log(err);
     });
  }

 toggleId() {
    this.showId = !this.showId;
  }

  ngOnInit() {
  }

}



