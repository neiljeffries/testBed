

import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { UserService } from './user/user.service';
import { UUID } from 'angular2-uuid';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("canActivate?")
    return this.checkLogin(url);
  }

  // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   return this.canActivate(route, state);
  // }

  // canLoad(route: Route): boolean {
  //   let url = `/${route.path}`;

  //   return this.checkLogin(url);
  // }

  checkLogin(url: string): boolean {
    console.log("checking if user is logged in");
    if (this.userService.loggedIn()) { 
      return true; 
    }

    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;

    // Create a dummy session id
    // let sessionId = this.guid();
    let sessionId = UUID.UUID();

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };


    // Navigate to the login page with extras
    this.router.navigate(['/notauthorized'], navigationExtras);
    return false;
  }
}
