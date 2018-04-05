import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FrogsService } from 'app/frogs.service'
import { MatDialog, MatDatepickerInputEvent, MatAccordion, MatSnackBar } from '@angular/material';
import { DialogComponent } from 'app/dialog/dialog.component';
import { ProfileComponent } from 'app/profile/profile.component';
@Component({
  selector: 'app-frogs',
  styleUrls: ['./frog-dashboard.component.css'],
  templateUrl: './frog-dashboard.component.html'
})


export class FrogDashboardComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;
  color = 'accent';
  checked = false;
  disabled = false;
  project: any;
  selected = 'option2';
  events: string[] = [];
  animal: string;
  name: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  constructor(
    private frogsService: FrogsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    // this.snackBar.openFromComponent(ProfileComponent, {
    //   duration: 5000,
    //   data: { name: this.name, animal: this.animal },
    // });
    const snackBarRef = this.snackBar.open('Message archived', 'Undo', {
      duration: 30000
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });


    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });

    // snackBarRef.dismiss();
  }



  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(`${type}: ${event.value}`);
  }

  openDialog(dialogId): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
      id: dialogId
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.animal = result.animal;
      }
    });

  }

  ngOnInit() {

    this.frogsService.activeProject.subscribe(res =>
      this.project = res
    );

  }

  public load() {
    this.frogsService.load();
  }


  public slideChanged(e) {
    console.log(e.checked ? 'on' : 'off');
  }



}

