import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { HttpClientModule, HttpClient, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { CrewmembersComponent } from './crewmembers/crewmembers.component';
import { CrewmembersService} from './crewmembers/crewmembers.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Zippy } from './event-emitter-test/event-emitter-test.component';
import { FrogDashboardComponent } from './frog-dashboard/frog-dashboard.component';
import { FrogsService } from 'app/frogs.service'
import { AppRoutingModule } from './/app-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HubxDashboardComponent } from './hubx-dashboard/hubx-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'app/app-material/app-material.module';
import { DialogComponent } from './dialog/dialog.component';
import { FlightsTableComponent } from './flights-table/flights-table.component';
import { FlightsService } from 'app/flights-table/flights-table.service';
import { LeftSlideoutComponent } from './left-slideout/left-slideout.component';
import { FidsDashboardComponent } from './fids-dashboard/fids-dashboard.component';
// tslint:disable-next-line:max-line-length
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatBottomSheet, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { B747400Component } from './airplanes/b747400/b747400.component';
import { B757200Component } from './airplanes/b757200/b757200.component';
import { B767300Component } from './airplanes/b767300/b767300.component';
import { A300600Component } from './airplanes/a300600/a300600.component';
import { MD11Component } from './airplanes/md11/md11.component';
import { B7478Component } from './airplanes/b7478/b7478.component';
import { LoadPositionTopComponent } from './airplanes/load-position-top/load-position-top.component';
import { LoadPositionPsectionComponent } from './airplanes/load-position-psection/load-position-psection.component';
import { LoadPositionBellyComponent } from './airplanes/load-position-belly/load-position-belly.component';
import { LoadPositionAbComponent } from './airplanes/load-position-ab/load-position-ab.component';
import { OnlyNumbersPipe } from 'app/pipes/only-numbers.pipe';
import { OnlyLettersPipe } from './pipes/only-letters.pipe';
import { AcTypePipe } from './pipes/ac-type.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CrewmembersComponent,
    NavbarComponent,
    Zippy,
    FrogDashboardComponent,
    DataTableComponent,
    HubxDashboardComponent,
    DialogComponent,
    FlightsTableComponent,
    LeftSlideoutComponent,
    FidsDashboardComponent,
    BottomSheetComponent,
    B747400Component,
    B757200Component,
    B767300Component,
    A300600Component,
    MD11Component,
    B7478Component,
    LoadPositionTopComponent,
    LoadPositionPsectionComponent,
    LoadPositionBellyComponent,
    LoadPositionAbComponent,
    OnlyNumbersPipe,
    OnlyLettersPipe,
    AcTypePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // HttpClientModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    JsonpModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    DialogComponent,
    BottomSheetComponent

  ],
  providers: [ProfileService, CrewmembersService, FrogsService, FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
