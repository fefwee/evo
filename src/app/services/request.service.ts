import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interface/types";

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private http: HttpClient) {
  }

  public getPosts = (): Observable<Post[]> => {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  public getComments = (): Observable<Post[]> => {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/comments', {params: new HttpParams().set('postId', 1)});
  }
  public postPosts = (): Observable<Post[]> => {
    return this.http.post<Post[]>('https://jsonplaceholder.typicode.com/posts', {})
  }
  public errorPost = (): Observable<Post[]> => {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/post');
  }

  public getSendHeaders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts',
      {
        headers: new HttpHeaders(
          {'X-Test': '1'}
        ),
        responseType: 'text'
      });
  }

  public deletePost = (): Observable<Post> => {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/1');
  }

  public resolve = (): Observable<Post[]> => {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/1');
  }
}
