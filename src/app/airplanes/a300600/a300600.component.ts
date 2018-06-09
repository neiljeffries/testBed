import { Component, OnInit, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-a300600',
  templateUrl: './a300600.component.html',
  styleUrls: ['./a300600.component.css'],

})

@Injectable()
export class A300600Component implements OnInit {
  @Input() flightLTPData: any;

// a300600Positions = [
//   {name:'1', valign:'center'},
//   {name:'2L', valign:'bottom'},
//   {name:'2R', valign:'top'},
//   {name:'3L', valign:'bottom'},
//   {name:'3R', valign:'top'},
//   {name:'4L', valign:'bottom'},
//   {name:'4R', valign:'top'},
//   {name:'5L', valign:'bottom'},
//   {name:'5R', valign:'top'},
//   {name:'5L', valign:'bottom'},
//   {name:'6R', valign:'top'},
//   {name:'6L', align:'bottom'},
//   {name:'7R', align:'top'},
//   {name:'7L', align:'bottom'},
//   {name:'8R', align:'top'},
//   {name:'8L', align:'bottom'},
//   {name:'9R', align:'top'},
//   {name:'9L', align:'bottom'},
//   {name:'10R', align:'top'},
//   {name:'10L', align:'bottom'},
//   {name:'11', align:'center'},
//   {name:'12', align:'center'},
//   {name:'13', align:'center'},
//   {name:'P1', align:'baseline'},
//   {name:'P2', align:'baseline'},
//   {name:'P3', align:'baseline'},
//   {name:'P4', align:'baseline'},
//   {name:'P5', align:'baseline'},
//   {name:'P6', align:'baseline'},
//   {name:'P7', align:'baseline'},
// ]

  constructor() { }

  ngOnInit() {
    console.log(this.flightLTPData);
  }

}
