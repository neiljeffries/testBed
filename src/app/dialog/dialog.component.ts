import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

animal: string;
dialogId: string;
flightDetail:any = [];

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
    console.log(this.data);
    //console.log(this.data.flightDetail.flightDetail[0]);
    console.log(this.dialogRef.id);

      this.dialogRef.afterOpen().subscribe(() => {
        console.log('after open fired');
      });

      this.dialogRef.afterClosed().subscribe(() => {
        console.log('after closed fired');
      });
  }



}
