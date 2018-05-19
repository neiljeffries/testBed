import { Component, ViewChild } from '@angular/core';
import { Zippy } from './event-emitter-test/event-emitter-test.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: any;
  title = 'testBed1';


  handleUserUpdated(user) {
    // Handle the event
    console.log('boom');
  }

  getNotification(evt) { //from navbar event emitter
    this.sidenav.toggle();
  }

}
