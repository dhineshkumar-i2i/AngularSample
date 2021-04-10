import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(public authenticate: AuthenticateService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticate.authenticated) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  
}
