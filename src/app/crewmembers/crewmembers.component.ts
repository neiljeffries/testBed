import { Component, OnInit } from '@angular/core';
import { CrewmembersService } from './crewmembers.service';
import { Crewmember } from './crewmember';

@Component({
  selector: 'app-crewmembers',
  templateUrl: './crewmembers.component.html',
  styleUrls: ['./crewmembers.component.css']
})

export class CrewmembersComponent implements OnInit {
  constructor(private crewmembersService: CrewmembersService){}
  crewmembers:Crewmember[];
  showId = false;

  loadCrewmembers(): void {
     this.crewmembersService.getCrewmembers()
     .subscribe(
       crewmembers => {
           this.crewmembers = crewmembers;
           console.log('this.crewmembers=' + this.crewmembers);
           console.log('this.crewmembers.length=' + this.crewmembers.length);
           console.log('this.usercrewmembers[0].first_name=' + this.crewmembers[0].first_name);
       }, //Bind to view
       err => {
       console.log(err);
     })
  }


  toggleId() {
    this.showId = !this.showId;
  }

  ngOnInit() {
  }

}
