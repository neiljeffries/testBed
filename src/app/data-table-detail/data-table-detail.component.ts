import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { DataTableDetailService } from "app/data-table-detail/data-table-detail.service";
import { Person } from './person';
@Component({
  selector: 'app-data-table-detail',
  templateUrl: './data-table-detail.component.html',
  styleUrls: ['./data-table-detail.component.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css'],
  encapsulation: ViewEncapsulation.None
})

export class DataTableDetailComponent {

  @ViewChild('myTable') table: any;
  people: Person[];
  expanded: any;
  timeout: any;
  errorMessage: String;
  selectedRow: Person[] = [];

  constructor(
    private dataService: DataTableDetailService
  ) {
    this.dataService.getData().subscribe(
      people => {this.people = <Person[]>people}, 
      error => {this.errorMessage = <any>error; console.log(this.errorMessage)}
    );
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  // my customized detail-row open/close behaviour, kinda hackish?... irdgaf.
  onSelect({ selected }) {
    this.table.rowDetail.collapseAllRows(); // close all detail rows
    this.table.rowDetail.toggleExpandRow(selected[0]); // expand selected detail row

    if (JSON.stringify(selected) === JSON.stringify(this.selectedRow)) { // if they click the same row again...
      this.table.rowDetail.collapseAllRows(); // collapse detail
      this.selectedRow = null; // reset selectedRow variable
    } else {
      this.selectedRow = selected; // they clicked a new row
    }
  }

}
