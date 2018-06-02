import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FidsFlight } from '../classes/fids-flight';
// import { A300600Component } from '../airplanes/a300600/a300600.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  animal: string;
  dialogId: string;
  flightDetail: FidsFlight = null;
  showPositionsLoaded = true;
  removePositionsLoaded = false;
  // displayedColumns = ['Flight Date', 'Sched Time', 'Est Time', 'Est Load Time', 'Last ULD Time', 'State', 'Status'];
  detailDisplayCols = ['flightdate', 'schedtime', 'esttime', 'estloadtime', 'lastuldloadtime', 'state'];
  dataSource = [];


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogId = this.dialogRef.id.toString();


  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    const DETAIL_DATA = [{
      flightdate: this.data.flightDetail[0].flightDate.millis,
      schedtime: this.data.flightDetail[0].flightSchedTime,
      esttime: this.data.flightDetail[0].flightEstTime,
      estTimeDiff: this.data.flightDetail[0].flightEstTimeDiff,
      estloadtime: this.data.flightDetail[0].flightLoadEstimate,
      lastuldloadtime: this.data.flightDetail[0].flightLastUldTs,
      state: this.data.flightDetail[0].flightState
    }];

    this.dataSource = DETAIL_DATA

    this.dialogRef.afterOpen().subscribe(() => {
      console.log('after open fired');
    });

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('after closed fired');
    });
  }



}
