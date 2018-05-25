import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrogDashboardComponent } from 'app/frog-dashboard/frog-dashboard.component';
import { CrewmembersComponent } from 'app/crewmembers/crewmembers.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { DataTableComponent } from 'app/data-table/data-table.component';
import { HubxDashboardComponent } from 'app/hubx-dashboard/hubx-dashboard.component';
import { FlightsTableComponent } from 'app/flights-table/flights-table.component';
import { MyDashboardComponent } from "app/my-dashboard/my-dashboard.component";

const routes: Routes = [
  { path: 'frogs', component: FrogDashboardComponent },
  { path: 'crew', component: CrewmembersComponent },
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'hubx', component: HubxDashboardComponent },
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'flights', component: FlightsTableComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



