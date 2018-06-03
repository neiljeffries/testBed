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
  @Input() ab1: any;
  @Input() ab2: any;
  constructor() { }

  ngOnInit() {
    this.positionStatus = this.ab1.positionStatus;
    this.positionLabel = this.ab1.positionLabel.trim();
    this.positionWeight = this.ab1.weight + this.ab2.weight;
    this.positionUldNumber = this.ab1.unitLoadingDevice;
    this.positionLock = this.ab1.positionLock;

  }

}
