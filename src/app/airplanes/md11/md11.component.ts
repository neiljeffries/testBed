import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-md11',
  templateUrl: './md11.component.html',
  styleUrls: ['./md11.component.css']
})
export class MD11Component implements OnInit {
  @Input() flightLTPData: any;

  constructor() { }

  ngOnInit() {
  }

}
