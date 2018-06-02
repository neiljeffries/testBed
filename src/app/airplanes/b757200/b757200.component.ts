import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b757200',
  templateUrl: './b757200.component.html',
  styleUrls: ['./b757200.component.css']
})
export class B757200Component implements OnInit {
  @Input() flightLTPData: any;
  constructor() { }

  ngOnInit() {
  }

}
