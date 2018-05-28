/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare DataTableDetailComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatFormField, MatSelect, MatTabsModule, MatProgressSpinner, MatDatepickerInputEvent,
  MatAccordion, MatSnackBar, MatProgressBar, MatMenu, MatSidenav, MatSidenavContainer, MatSidenavContent, MatGridListModule,
  MatSidenavModule } from '@angular/material';

import { DialogComponent } from 'app/dialog/dialog.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FlightsService } from 'app/flights-table/flights-table.service';
import { Flight } from './flight';
// import { MatTabsModule } from 'app/app-material/app-material.module'
import { trigger, transition, style, animate, state, group, keyframes } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FidsData } from '../classes/fids-data';
import { FidsFlight } from '../classes/fids-flight';
import { FidsAlert } from '../classes/fids-alert';
import { DatePipe } from '@angular/common';


// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


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
  selector: 'app-flights-table',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
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

  fidsData: FidsData = null;
  fidsArrivingFlights: FidsFlight = null;
  fidsDepartingFlights: FidsFlight = null;
  fidsAlerts: FidsAlert = null;
  @ViewChild('flightsTable') flightsTable: any;
  temp = [];
  temp2 = [];
  flights: Flight[] = null;
  flights_original: Flight[] = null;
  expanded: any;
  timeout: any;
  errorMessage: String;
  selectedRow: Flight[] = [];
  progressSpinnerColor = 'primary';
  progressSpinnerMode = 'indeterminate';
  rowLimit = 15;
  progressSpinnerValue = 50;
  filterInputValue = '';
  rowsExpanded = false;
  showParking = true;
  showCaptain = true;
  showEstTime = true;
  showStatus = true;
  showTail = true;
  showFlight = true;
  showTableOptions = false;
  showAlert = false;
  expandCollapseRowsText = 'Expand';

  constructor(
    // private bottomSheet: MatBottomSheet,
    private flightsService: FlightsService, public dialog: MatDialog,
  ) {
    // this.flightsService.getFlights().subscribe(
    //   flights => {
    //     this.flights = <Flight[]>flights;
    //     this.flights_original = <Flight[]>flights;
    //     this.temp = [...flights]
    //   },
    //   error => {
    //     this.errorMessage = <any>error;
    //     console.log(this.errorMessage)
    //   }
    // );

    this.flightsService.getFlightsJsonp().subscribe(
      res => {
        this.fidsData = <FidsData>res;
        this.fidsArrivingFlights = <FidsFlight>this.fidsData.fidsArrivingFlights;
        this.fidsDepartingFlights = <FidsFlight>this.fidsData.fidsDepartingFlights;
        this.fidsAlerts = <FidsAlert>this.fidsData.fidsAlerts;
        // this.flights = <Flight[]>flights;
        // this.temp = [...flights]
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage)
      }
    );

    // Observable.interval(10000)
    //   .subscribe(data => {
    //     this.showAlert = !this.showAlert;
    //   });

  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  onSelect({ selected }) {

    

    //this.flightsTable.rowDetail.collapseAllRows(); // close all detail rows
    //this.flightsTable.rowDetail.toggleExpandRow(selected[0]); // expand selected detail row
    console.log(selected);
    if (JSON.stringify(selected) === JSON.stringify(this.selectedRow)) { // if they click the same row again...
      //this.flightsTable.rowDetail.collapseAllRows(); // collapse detail
      this.selectedRow = null; // reset selectedRow variable
    } else {
      this.selectedRow = selected; // they clicked a new row
      this.openDialog('flightDetail');
    }
  }

  openDialog(dialogId): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {flightDetail: this.selectedRow},
      id: dialogId,
      width: '800px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.selectedRow = result.selectedRow;
      }
    });

  }

  // toggleRows() {

  //   if (this.rowsExpanded) {
  //     this.flightsTable.rowDetail.collapseAllRows();
  //     this.expandCollapseRowsText = 'Expand';
  //   } else {
  //     this.flightsTable.rowDetail.expandAllRows();
  //     this.expandCollapseRowsText = 'Collapse';
  //   }
  //   this.rowsExpanded = !this.rowsExpanded;
  // }



  toggleTableOptions() {
    this.showTableOptions = !this.showTableOptions;
  }


  // Flight table search filter
  updateFilter(event) {
    let val;
// console.log(event.target.value);
    if (event == null || (event !== null && event.target.value === '')) {
      val = '';
    } else {
      val = event.target.value.toLowerCase();
    }

    // Name Filter Array
    const temp = this.temp.filter(function (x) {
      return x.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Age Filter Array
    const temp2 = this.temp.filter(function (d) {
      return d.age.toString().toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (event == null || (event !== null && event.target.value === '')) {
      this.flights = this.flights_original;
    } else {
      // updates the rows
      this.flights = temp;
      this.flights = this.flights.concat(temp2)
    }

    // Whenever the filter changes, always go back to the first page
    this.flightsTable.offset = 0;
  }

    getSettingsClickNotification(event) {
    // perform settings click here!
    // toggleTableOptions();
    console.log('settings icon clicked and detected in flights-table.component');
  }





}
