import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
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

export class DataTableDetailComponent implements OnInit {

  @ViewChild('myTable') table: any;
  person: Person[];
  expanded: any = {};
  timeout: any;
  errorMessage: String;
  selected = [];

  constructor(
    private dataService: DataTableDetailService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      person => this.person = person,
      error => this.errorMessage = <any>error
    );
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  onSelect({ selected }) {
    this.table.rowDetail.collapseAllRows()
    this.table.rowDetail.toggleExpandRow(selected[0]);

    // console.log(selected[0])
    // if(this.selected != selected[0]){
    //   console.log("NOT SAME")
    // }else{
    //   console.log("SAME");
    // }
   // this.selected = selected[0];


  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event.value.id);
  }
}
