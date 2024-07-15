import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Posts {
  userId: number
  id: number;
  title: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public role: 'user' | 'admin' = 'user';

  constructor(private http: HttpClient) {
  }

  public getData = (): Observable<Posts[]> => {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getPostId(id: number): Observable<Posts> {
    return this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  };
}
