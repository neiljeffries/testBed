/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare DataTableDetailComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatFormField, MatSelect, MatTabsModule, MatProgressSpinner, MatDatepickerInputEvent, MatAccordion, MatSnackBar, MatProgressBar, MatMenu, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material';
import { DialogComponent } from 'app/dialog/dialog.component';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { FlightsService } from "app/flights-table/flights-table.service";
import { Flight } from './flight';
//import { MatTabsModule } from 'app/app-material/app-material.module'
import { trigger, transition, style, animate, state, group, keyframes } from '@angular/animations'
import {BrowserModule} from '@angular/platform-browser'
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'



// animations: [
//   trigger('shrinkOut', [
//     state('in', style({height: '*'})),
//     transition('* => void', [
//       style({height: '*'}),
//       animate(250, style({height: 0}))
//     ])
//   ])
// ]


@Component({
  selector: 'app-data-table-detail',
animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])
],
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
  rowsExpanded = false;
  showName = true;
  showGender = true;
  showAge = true;
  showLoad = true;
  showExpanded = true;
  showIndex = true;
  showTableOptions = false;
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

  toggleRows() {

    if (this.rowsExpanded) {
      this.flightsTable.rowDetail.collapseAllRows();
    } else {
      this.flightsTable.rowDetail.expandAllRows();
    }
    this.rowsExpanded = !this.rowsExpanded;
  }

  // toggleCol(colName) {



  //   if (colName == 'name') {
  //     this.showName = !this.showName
  //   }

  //   if (colName == 'gender') {
  //     this.showGender = !this.showGender
  //   }

  //   if (colName == 'age') {
  //     this.showAge = !this.showAge
  //   }

  //   if (colName == 'load') {
  //     this.showLoad = !this.showLoad
  //   }

  //   if (colName == 'expanded') {
  //     this.showExpanded = !this.showExpanded
  //   }

  //   if (colName == 'Index') {
  //     this.showIndex= !this.showIndex
  //   }


  // }

  toggleTableOptions(){
    this.showTableOptions= !this.showTableOptions;
  }

}
