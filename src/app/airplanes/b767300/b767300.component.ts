import { Component, OnInit, Input } from '@angular/core';
import { FidsFlightLoadPosition } from 'app/classes/fids-load-position';

@Component({
  selector: 'app-b767300',
  templateUrl: './b767300.component.html',
  styleUrls: ['./b767300.component.css']
})
export class B767300Component implements OnInit {
  @Input() flightLTPData: any;
  pos1: Array<FidsFlightLoadPosition> = [];
  pos2C: Array<FidsFlightLoadPosition> = [];
  pos2R: Array<FidsFlightLoadPosition> = [];
  pos2L: Array<FidsFlightLoadPosition> = [];
  pos3C: Array<FidsFlightLoadPosition> = [];
  pos3R: Array<FidsFlightLoadPosition> = [];
  pos3L: Array<FidsFlightLoadPosition> = [];
  pos4C: Array<FidsFlightLoadPosition> = [];
  pos4R: Array<FidsFlightLoadPosition> = [];
  pos4L: Array<FidsFlightLoadPosition> = [];
  pos5C: Array<FidsFlightLoadPosition> = [];
  pos5R: Array<FidsFlightLoadPosition> = [];
  pos5L: Array<FidsFlightLoadPosition> = [];
  pos6C: Array<FidsFlightLoadPosition> = [];
  pos6R: Array<FidsFlightLoadPosition> = [];
  pos6L: Array<FidsFlightLoadPosition> = [];
  pos7C: Array<FidsFlightLoadPosition> = [];
  pos7R: Array<FidsFlightLoadPosition> = [];
  pos7L: Array<FidsFlightLoadPosition> = [];
  pos8C: Array<FidsFlightLoadPosition> = [];
  pos8R: Array<FidsFlightLoadPosition> = [];
  pos8L: Array<FidsFlightLoadPosition> = [];
  pos9C: Array<FidsFlightLoadPosition> = [];
  pos9R: Array<FidsFlightLoadPosition> = [];
  pos9L: Array<FidsFlightLoadPosition> = [];
  pos10C: Array<FidsFlightLoadPosition> = [];
  pos10R: Array<FidsFlightLoadPosition> = [];
  pos10L: Array<FidsFlightLoadPosition> = [];
  pos11C: Array<FidsFlightLoadPosition> = [];
  pos11R: Array<FidsFlightLoadPosition> = [];
  pos11L: Array<FidsFlightLoadPosition> = [];
  pos12C: Array<FidsFlightLoadPosition> = [];
  pos12R: Array<FidsFlightLoadPosition> = [];
  pos12L: Array<FidsFlightLoadPosition> = [];
  pos13: Array<FidsFlightLoadPosition> = [];
  posP1: Array<FidsFlightLoadPosition> = [];
  posP2: Array<FidsFlightLoadPosition> = [];
  posP3: Array<FidsFlightLoadPosition> = [];
  posP4: Array<FidsFlightLoadPosition> = [];
  posP5: Array<FidsFlightLoadPosition> = [];
  posP6: Array<FidsFlightLoadPosition> = [];
  posP7: Array<FidsFlightLoadPosition> = [];
  posAb1: Array<FidsFlightLoadPosition> = [];
  posAb2: Array<FidsFlightLoadPosition> = [];
  constructor() { }



  getByPosition(arr, value) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].positionLabel === value) {
        return arr[i]
      }
    }
  }

  getABPosition(arr, value) {
    const testArr = []
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].positionLabel === value) {
        testArr.push(arr[i]);
      }
    }
    return testArr;
  }


  ngOnInit() {
    console.log(this.flightLTPData);
    this.pos1 = this.getByPosition(this.flightLTPData.position, '1');
    this.pos2C = this.getByPosition(this.flightLTPData.position, '2C');
    this.pos2R = this.getByPosition(this.flightLTPData.position, '2R');
    this.pos2L = this.getByPosition(this.flightLTPData.position, '2L');
    this.pos3C = this.getByPosition(this.flightLTPData.position, '3C');
    this.pos3R = this.getByPosition(this.flightLTPData.position, '3R');
    this.pos3L = this.getByPosition(this.flightLTPData.position, '3L');
    this.pos4C = this.getByPosition(this.flightLTPData.position, '4C');
    this.pos4R = this.getByPosition(this.flightLTPData.position, '4R');
    this.pos4L = this.getByPosition(this.flightLTPData.position, '4L');
    this.pos5C = this.getByPosition(this.flightLTPData.position, '5C');
    this.pos5R = this.getByPosition(this.flightLTPData.position, '5R');
    this.pos5L = this.getByPosition(this.flightLTPData.position, '5L');
    this.pos6C = this.getByPosition(this.flightLTPData.position, '6C');
    this.pos6R = this.getByPosition(this.flightLTPData.position, '6R');
    this.pos6L = this.getByPosition(this.flightLTPData.position, '6L');
    this.pos7C = this.getByPosition(this.flightLTPData.position, '7C');
    this.pos7R = this.getByPosition(this.flightLTPData.position, '7R');
    this.pos7L = this.getByPosition(this.flightLTPData.position, '7L');
    this.pos8C = this.getByPosition(this.flightLTPData.position, '8C');
    this.pos8R = this.getByPosition(this.flightLTPData.position, '8R');
    this.pos8L = this.getByPosition(this.flightLTPData.position, '8L');
    this.pos9C = this.getByPosition(this.flightLTPData.position, '9C');
    this.pos9R = this.getByPosition(this.flightLTPData.position, '9R');
    this.pos9L = this.getByPosition(this.flightLTPData.position, '9L');
    this.pos10C = this.getByPosition(this.flightLTPData.position, '10C');
    this.pos10R = this.getByPosition(this.flightLTPData.position, '10R');
    this.pos10L = this.getByPosition(this.flightLTPData.position, '10L');
    this.pos11C = this.getByPosition(this.flightLTPData.position, '11C');
    this.pos11R = this.getByPosition(this.flightLTPData.position, '11R');
    this.pos11L = this.getByPosition(this.flightLTPData.position, '11L');
    this.pos12C = this.getByPosition(this.flightLTPData.position, '12C');
    this.pos12R = this.getByPosition(this.flightLTPData.position, '12R');
    this.pos12L = this.getByPosition(this.flightLTPData.position, '12L');
    this.pos13 = this.getByPosition(this.flightLTPData.position, '13');
    this.posP1 = this.getByPosition(this.flightLTPData.position, 'P1');
    this.posP2 = this.getByPosition(this.flightLTPData.position, 'P2');
    this.posP3 = this.getByPosition(this.flightLTPData.position, 'P3');
    this.posP4 = this.getByPosition(this.flightLTPData.position, 'P4');
    this.posP5 = this.getByPosition(this.flightLTPData.position, 'P5');
    this.posP6 = this.getByPosition(this.flightLTPData.position, 'P6');
    this.posP7 = this.getByPosition(this.flightLTPData.position, 'P7');
    this.posAb1 = this.getABPosition(this.flightLTPData.position, 'AB')[0]; // gets AB1
    this.posAb2 = this.getABPosition(this.flightLTPData.position, 'AB')[1]; // gets AB2
  }


}



