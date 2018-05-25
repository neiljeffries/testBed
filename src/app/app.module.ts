import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';

//import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { CrewmembersComponent } from './crewmembers/crewmembers.component';
import { CrewmembersService} from './crewmembers/crewmembers.service';
import { CrewmemberSearchComponent } from './crewmember-search/crewmember-search.component';
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
import { FlightsService } from "app/flights-table/flights-table.service";
import { LeftSlideoutComponent } from './left-slideout/left-slideout.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CrewmembersComponent,
    CrewmemberSearchComponent,
    NavbarComponent,
    Zippy,
    FrogDashboardComponent,
    DataTableComponent,
    HubxDashboardComponent,
    DialogComponent,
    FlightsTableComponent,
    LeftSlideoutComponent,
    MyDashboardComponent,
    //HttpClient
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //HttpClientModule,
    //HttpClient,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [ProfileService, CrewmembersService, FrogsService, FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
