import {inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from "../services/get-data.service";

export const roleAccessGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const service = inject(GetDataService);
    const router = inject(Router);

    if (service.role === 'admin') {
      return true;
    } else {
      return router.navigateByUrl('/error');
    }
  };
