import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b747400',
  templateUrl: './b747400.component.html',
  styleUrls: ['./b747400.component.css']
})
export class B747400Component implements OnInit {
  @Input() flightLTPData: any;
  constructor() { }

  ngOnInit() {
  }

}