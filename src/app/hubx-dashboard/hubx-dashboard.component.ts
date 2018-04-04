import { Component, OnInit } from '@angular/core';
declare var $;



@Component({
  selector: 'app-hubx-dashboard',
  templateUrl: './hubx-dashboard.component.html',
  styleUrls: ['./hubx-dashboard.component.css']
})
export class HubxDashboardComponent implements OnInit {

  public func: any;
  public showDate: string = 'smile :)';
  constructor() {

    // $(function () {

    //   $("#datepicker").datepicker({
    //     numberOfMonths: 2,
    //     onSelect: function (selectedDate) {

    //       console.log(selectedDate);
    //       $('#showdate').text(selectedDate)
    //       this.showDate = selectedDate;

    //     }
    //   });

    // });

    /*
        $(function () {
          $("#datepicker").datepicker({
            numberOfMonths: 2,
            onSelect: function (selectedDate) {
    
              console.log(selectedDate);
              $('#showdate').text(selectedDate)
              
    
              // var date = $(this).datepicker('getDate');
              // var day = date.getUTCDay();
              // if (day == '6') {
              //     alert('its a saturday');
    
              // }
    
            }
          });
        });
        */
  }

  ngOnInit() {
  }

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'name' },
    { name: 'Gender' }
  ];

  haveEmittedData(event) {
    this.rows = event;
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
    console.log('----GOOD NEWS - haveEmittedData fired in the hubxdashboard!----')
    console.log("------------this.rows-------------");
    console.log(this.rows);
    console.log("------------event-----------------");
    console.log(event);
    console.log("------------finished-----------------");
  }

}
