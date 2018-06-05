import { Component, OnInit, Input } from '@angular/core';
import { FidsFlightLoadPosition } from 'app/classes/fids-load-position';
import { FidsFlightLoadData } from 'app/classes/fids-load-data';

@Component({
  selector: 'app-b767300',
  templateUrl: './b767300.component.html',
  styleUrls: ['./b767300.component.css']
})
export class B767300Component implements OnInit {
  @Input() flightLTPData: FidsFlightLoadData;
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

  show2C = false;
  show3C = false;
  show4C = false;
  show5C = false;
  show6C = false;
  show7C = false;
  show8C = false;
  show9C = false;
  show10C = false;
  show11C = false;
  show12C = false;

  constructor() { }

  /* Loop over all positions and extract the correct position data for each instance variable */
  setPositions(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {

      switch (arr[i].positionLabel) {
        case '1': { this.pos1 = arr[i]; break; }
        case '2C': { this.pos2C = arr[i]; break; }
        case '2R': { this.pos2R = arr[i]; break; }
        case '2L': { this.pos2L = arr[i]; break; }
        case '3C': { this.pos3C = arr[i]; break; }
        case '3R': { this.pos3R = arr[i]; break; }
        case '3L': { this.pos3L = arr[i]; break; }
        case '4C': { this.pos4C = arr[i]; break; }
        case '4R': { this.pos4R = arr[i]; break; }
        case '4L': { this.pos4L = arr[i]; break; }
        case '5C': { this.pos5C = arr[i]; break; }
        case '5R': { this.pos5R = arr[i]; break; }
        case '5L': { this.pos5L = arr[i]; break; }
        case '6C': { this.pos6C = arr[i]; break; }
        case '6R': { this.pos6R = arr[i]; break; }
        case '6L': { this.pos6L = arr[i]; break; }
        case '7C': { this.pos7C = arr[i]; break; }
        case '7R': { this.pos7R = arr[i]; break; }
        case '7L': { this.pos7L = arr[i]; break; }
        case '8C': { this.pos8C = arr[i]; break; }
        case '8R': { this.pos8R = arr[i]; break; }
        case '8L': { this.pos8L = arr[i]; break; }
        case '9C': { this.pos9C = arr[i]; break; }
        case '9R': { this.pos9R = arr[i]; break; }
        case '9L': { this.pos9L = arr[i]; break; }
        case '10C': { this.pos10C = arr[i]; break; }
        case '10R': { this.pos10R = arr[i]; break; }
        case '10L': { this.pos10L = arr[i]; break; }
        case '11C': { this.pos11C = arr[i]; break; }
        case '11R': { this.pos11R = arr[i]; break; }
        case '11L': { this.pos11L = arr[i]; break; }
        case '12C': { this.pos12C = arr[i]; break; }
        case '12R': { this.pos12R = arr[i]; break; }
        case '12L': { this.pos12L = arr[i]; break; }
        case '13': { this.pos13 = arr[i]; break; }
        case 'P1': { this.posP1 = arr[i]; break; }
        case 'P2': { this.posP2 = arr[i]; break; }
        case 'P3': { this.posP3 = arr[i]; break; }
        case 'P4': { this.posP4 = arr[i]; break; }
        case 'P5': { this.posP5 = arr[i]; break; }
        case 'P6': { this.posP6 = arr[i]; break; }
        case 'P7': { this.posP7 = arr[i]; break; }
        default: { /*default stuff*/ break; }
      }
    }

    /* There are 2 AB positions with the name name, this will allow us to get both */
    this.posAb1 = this.getABPosition(this.flightLTPData.position, 'AB')[0]; // gets AB1
    this.posAb2 = this.getABPosition(this.flightLTPData.position, 'AB')[1]; // gets AB2

    /* Logic to toggle the display of the center uld position vs the left/right uld configuration */
    if (this.pos2C.length !== 0) { this.show2C = true; }
    if (this.pos3C.length !== 0) { this.show3C = true; }
    if (this.pos4C.length !== 0) { this.show4C = true; }
    if (this.pos5C.length !== 0) { this.show5C = true; }
    if (this.pos6C.length !== 0) { this.show6C = true; }
    if (this.pos7C.length !== 0) { this.show7C = true; }
    if (this.pos8C.length !== 0) { this.show8C = true; }
    if (this.pos9C.length !== 0) { this.show9C = true; }
    if (this.pos10C.length !== 0) { this.show10C = true; }
    if (this.pos11C.length !== 0) { this.show11C = true; }
    if (this.pos12C.length !== 0) { this.show12C = true; }

  }

  // getByPosition(arr, value) {
  //   for (let i = 0, iLen = arr.length; i < iLen; i++) {
  //     if (arr[i].positionLabel === '1') { this.pos1 = arr[i]; }
  //   }
  // }

  /* There are 2 AB positions with the name name, this will allow us to get both */
  getABPosition(arr, value) {
    const AbPositionsArray = []
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].positionLabel === value) {
        AbPositionsArray.push(arr[i]);
      }
    }
    return AbPositionsArray;
  }


  ngOnInit() {
    console.log(this.flightLTPData);
    this.setPositions(this.flightLTPData.position);
  }

}
