import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../interface/types";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  public getData = (): Observable<Todo> => {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos');
  }
}
