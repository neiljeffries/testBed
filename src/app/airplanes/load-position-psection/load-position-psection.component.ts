import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-position-psection',
  templateUrl: './load-position-psection.component.html',
  styleUrls: ['./load-position-psection.component.css']
})
export class LoadPositionPsectionComponent implements OnInit {

    positionStatus: string;
    positionLabel: string;
    positionWeight: string;
    @Input() flightLTPData: any;

    constructor() { }


  ngOnInit() {
    this.positionStatus = this.flightLTPData.positionStatus;
    this.positionLabel = this.flightLTPData.positionStatus;
    this.positionWeight = this.flightLTPData.positionStatus;

  }

}
