import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrogDashboardComponent } from "app/frog-dashboard/frog-dashboard.component";
import { CrewmembersComponent } from "app/crewmembers/crewmembers.component";
import { ProfileComponent } from "app/profile/profile.component";
import { DataTableComponent } from "app/data-table/data-table.component";
import { HubxDashboardComponent } from "app/hubx-dashboard/hubx-dashboard.component";
import { DataTableDetailComponent } from "app/data-table-detail/data-table-detail.component";

const routes: Routes = [
  { path: 'frogs', component: FrogDashboardComponent },
  { path: 'crew', component: CrewmembersComponent },  
  { path: '', redirectTo: '/crew', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'hubx', component: HubxDashboardComponent },
  { path: 'detailtable', component: DataTableDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



