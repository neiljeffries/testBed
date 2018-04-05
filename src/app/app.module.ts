import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [ProfileService, CrewmembersService, FrogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
