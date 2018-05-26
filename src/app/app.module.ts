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
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatBottomSheet, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';



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
