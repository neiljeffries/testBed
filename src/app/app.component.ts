import { Component } from '@angular/core';
import { Zippy } from './event-emitter-test/event-emitter-test.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'Hubx';

  handleUserUpdated(user) {
    // Handle the event
    console.log("boom");
  }

}
