import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {RequestService} from "../services/request.service";
import {Post} from "../interface/types";

@Injectable({
  providedIn: 'root'
})
export class PreFetchingResolver implements Resolve<Post[]> {
  constructor(private request: RequestService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.request.resolve()
  }
}
