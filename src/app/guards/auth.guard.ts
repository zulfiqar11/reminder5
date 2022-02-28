import { SecurityService } from './../shared/security.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private security: SecurityService) {}

  // todo: review async await concept from algoexpert.
  // todo: what is Promise<boolean | UrlTree>
  // todo: read up on Auth guard on angular.io

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {

      const user = await this.security.currentUser();
      const isAuthenticated = user ? true : false;
      return isAuthenticated;
  }

}
