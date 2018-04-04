import { Component, OnInit, Inject } from '@angular/core';
import { FrogsService } from 'app/frogs.service'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material';
import { DialogComponent } from "app/dialog/dialog.component";

@Component({
  selector: 'frogs',
  styleUrls: ['./frog-dashboard.component.css'],
  templateUrl: './frog-dashboard.component.html'
})

//template: `<br><br><div>{{project?.date}} <br>{{project?.time}} <br>{{project?.milliseconds_since_epoch}}  <a href="#" (click)="load()">Load 1234</a> </div>`,
export class FrogDashboardComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;
  project: any;
  selected = 'option2';
  events: string[] = [];
  animal: string;
  name: string;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor(
    private frogsService: FrogsService, 
    public dialog: MatDialog
  ) { }

  openDialog(dialogId): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal },
      id: dialogId
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result)
      this.animal = result.animal;
    });
  }

  ngOnInit() {

    this.frogsService.activeProject
      .subscribe(res => 
        this.project = res
      );

  }

  public load() {
    this.frogsService.load();
  }


  public slideChanged(e) {
      console.log(e.checked ? "on" : "off");
  }



}

