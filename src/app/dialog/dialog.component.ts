import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FidsFlight } from '../classes/fids-flight';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dialogId: string;
  flightDetail: FidsFlight = null;
  showPositionsLoaded = true;
  removePositionsLoaded = false;

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

    this.dialogRef.afterOpen().subscribe(() => {
      console.log('after open fired');
    });

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('after closed fired');
    });
  }



}
