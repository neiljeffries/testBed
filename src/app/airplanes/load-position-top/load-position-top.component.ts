import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-position-top',
  templateUrl: './load-position-top.component.html',
  styleUrls: ['./load-position-top.component.css']
})
export class LoadPositionTopComponent implements OnInit {
  positionStatus: string;
  positionLabel: string;
  positionWeight: string;
  positionUldNumber: string;
  positionLock: string;
  @Input() position: any;
  constructor() { }

  ngOnInit() {
    if (this.position) {
    this.positionStatus = this.position.positionStatus;
    this.positionLabel = this.position.positionLabel;
    this.positionWeight = this.position.weight;
    this.positionUldNumber = this.position.unitLoadingDevice;
    this.positionLock = this.position.positionLock;
    }
  }

}
