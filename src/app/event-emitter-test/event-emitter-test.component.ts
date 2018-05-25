import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <button class="btn btn-default" (click)="toggle()">Toggle</button>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
 </div>`})

export class Zippy {

  visible: boolean = true;

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
      console.log(1)
    } else {
      this.close.emit(null);
      console.log(2)
    }
  }

    handleUserUpdated(user) {
    // Handle the event
    console.log("boom");
  }

}