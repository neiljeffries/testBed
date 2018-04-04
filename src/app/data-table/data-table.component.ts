import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [
    './data-table.component.css']
})
export class DataTableComponent implements OnInit {

@Output() emittedData: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      this.emittedData.emit(data);
      console.log("GOOD - emitting data now!");
      console.log(data);
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  ngOnInit() {
  }

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];



  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

}
