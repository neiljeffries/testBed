import { Component, ViewChild } from '@angular/core';
import { Zippy } from './event-emitter-test/event-emitter-test.component';
import { UserService } from 'app/user/user.service';
import { FidsUser } from './classes/fids-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

@ViewChild('sidenav') sidenav: any;
title = 'Fids Mobile';
fidsUser: FidsUser;
errorMessage: String;

constructor(private userService: UserService) {
  this.getUser();
}

getUser() {
  this.userService.getFidsUser().subscribe(
    res => {
      this.fidsUser = <FidsUser>res;
      console.log(this.fidsUser);
    },
    error => {
      this.errorMessage = <any>error;
      console.log(this.errorMessage)
    }
  );
}

  handleUserUpdated(user) {
    // Handle the event
    console.log('boom');
  }

  getNotification(evt) { // from navbar event emitter
    this.sidenav.toggle();
  }

}
