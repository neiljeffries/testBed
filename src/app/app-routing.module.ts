import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrogDashboardComponent } from 'app/frog-dashboard/frog-dashboard.component';
import { CrewmembersComponent } from 'app/crewmembers/crewmembers.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { DataTableComponent } from 'app/data-table/data-table.component';
import { HubxDashboardComponent } from 'app/hubx-dashboard/hubx-dashboard.component';
import { FlightsTableComponent } from 'app/flights-table/flights-table.component';
import { FidsDashboardComponent } from "app/fids-dashboard/fids-dashboard.component";
import { B747400Component } from "app/airplanes/b747400/b747400.component";

const routes: Routes = [
  { path: 'alerts', component: FrogDashboardComponent },
  { path: 'crew', component: CrewmembersComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '*', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'hubx', component: HubxDashboardComponent },
  { path: 'flights', component: FlightsTableComponent },
  { path: 'dashboard', component: FidsDashboardComponent },
  { path: '747400', component: B747400Component }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



