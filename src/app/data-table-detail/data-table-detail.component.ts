import { Component, ViewEncapsulation, ViewChild } from '@angular/core';



@Component({
  selector: 'app-data-table-detail',
  templateUrl: './data-table-detail.component.html',
  styleUrls: ['./data-table-detail.component.css',
              '../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css',
              '../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableDetailComponent {
@ViewChild('myTable') table: any;


rows: any[] = [];
  expanded: any = {};
  timeout: any;

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
    
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
