import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Sms/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuthGuard implements CanActivate {

  constructor(private get: AuthService,private rout:Router ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.get.get()) {
      // this.rout.navigate(["tdas"])
      return true;

    } else {
      return false;
    }
  }

}
