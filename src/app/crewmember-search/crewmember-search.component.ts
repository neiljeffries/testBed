import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crewmember-search',
  templateUrl: './crewmember-search.component.html',
  styleUrls: ['./crewmember-search.component.css']
})
export class CrewmemberSearchComponent implements OnInit {

  constructor() { }

  searchCrewmembers(event:any){
    //console.log(event)
  }

  ngOnInit() {
  }

}
