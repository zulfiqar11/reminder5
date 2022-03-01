import { SecurityService } from './../shared/security.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private security: SecurityService, private router: Router) {}

  // todo: review async await concept from algoexpert.
  // todo: what is Promise<boolean | UrlTree>

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {

      const user = await this.security.currentUser();
      const isAuthenticated = user ? true : false;
      if (isAuthenticated) {
        return true;
      }
      let stateURL = state.url;
      this.router.navigate(['login'], { queryParams: {returnUrl: state.url}});
      return false;
  }

}
