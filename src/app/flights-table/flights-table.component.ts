/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare DataTableDetailComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatFormField, MatSelect, MatProgressSpinner, MatDatepickerInputEvent, MatAccordion, MatSnackBar, MatProgressBar, MatMenu, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material';
import { DialogComponent } from 'app/dialog/dialog.component';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { FlightsService } from "app/flights-table/flights-table.service";
import { Flight } from './flight';
@Component({
  selector: 'app-data-table-detail',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css'],
  encapsulation: ViewEncapsulation.None
})

export class FlightsTableComponent {

  @ViewChild('flightsTable') flightsTable: any;
  flights: Flight[] = null;
  expanded: any;
  timeout: any;
  errorMessage: String;
  selectedRow: Flight[] = [];
  color = 'primary';
  mode = 'indeterminate';
  rowLimit = 12;
  value = 50;
  constructor(
    private flightsService: FlightsService, public dialog: MatDialog,
  ) {
    this.flightsService.getFlights().subscribe(
      flights => this.flights = <Flight[]>flights, 
      error => {
        this.errorMessage = <any>error; 
        console.log(this.errorMessage)
      }
    );
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  onSelect({ selected }) {

    this.flightsTable.rowDetail.collapseAllRows(); // close all detail rows
    this.flightsTable.rowDetail.toggleExpandRow(selected[0]); // expand selected detail row
console.log(selected);
    if (JSON.stringify(selected) === JSON.stringify(this.selectedRow)) { // if they click the same row again...
      this.flightsTable.rowDetail.collapseAllRows(); // collapse detail
      this.selectedRow = null; // reset selectedRow variable
    } else {
      this.selectedRow = selected; // they clicked a new row
    }
  }

    openDialog(dialogId): void {

      console.log(this.selectedRow);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.selectedRow[0].name, animal: this.selectedRow[0].gender },
      id: dialogId
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.selectedRow = result.selectedRow;
      }
    });

  }

}
