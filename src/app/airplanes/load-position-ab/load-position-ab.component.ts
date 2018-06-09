import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-position-ab',
  templateUrl: './load-position-ab.component.html',
  styleUrls: ['./load-position-ab.component.css']
})
export class LoadPositionAbComponent implements OnInit {
  positionStatus: string;
  positionLabel: string;
  positionWeight: string;
  positionUldNumber: string;
  positionLock: string;
  @Input() ab: any;
 // @Input() ab: any;
  constructor() { }

  ngOnInit() {
    this.positionStatus = this.ab.positionStatus;
    this.positionLabel = this.ab.positionLabel.trim();
    this.positionWeight = this.ab.weight;
    this.positionUldNumber = this.ab.unitLoadingDevice;
    this.positionLock = this.ab.positionLock;

  }

}
