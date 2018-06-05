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
    positionUldNumber: string;
    positionLock: string;
    @Input() pRightMargin: boolean;
    @Input() position: any;

    constructor() { }


  ngOnInit() {
    this.positionStatus = this.position.positionStatus;
    this.positionLabel = this.position.positionLabel.trim();
    this.positionWeight = this.position.weight;
    this.positionUldNumber = this.position.unitLoadingDevice;
    this.positionLock = this.position.positionLock;

  }

}
