import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b767300',
  templateUrl: './b767300.component.html',
  styleUrls: ['./b767300.component.css']
})
export class B767300Component implements OnInit {
  @Input() flightLTPData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.flightLTPData);
  }

}
