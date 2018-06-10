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
import { AuthGuard } from "app/auth.guard";
import { PageNotFoundComponent } from 'app/not-found.component';
import { NotAuthorizedComponent } from 'app/not-authorized.component';

// import { PageNotFoundComponent }    from './not-found.component';

const routes: Routes = [
    { path: 'alerts', component: FrogDashboardComponent },
    // { path: 'crew', component: CrewmembersComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //{ path: '*', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
    // { path: 'datatable', component: DataTableComponent },
    // { path: 'hubx', component: HubxDashboardComponent },
    { path: 'notauthorized', component: NotAuthorizedComponent },
    { path: 'flights', component: FlightsTableComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: FidsDashboardComponent },
    // { path: '747400', component: B747400Component },
    { path: '**', component: PageNotFoundComponent }
   
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }



