import {Component} from '@angular/core';
import {RequestService} from "./services/request.service";
import {Post} from "./interface/types";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: RequestService) {
  }

  public oneGetPosts = (): void => {
    this.service.getPosts().subscribe({
      next: (item: Post[]) => {
        console.log(item)
      }
    })
  }

  public secondGetComments = (): void => {
    this.service.getComments().subscribe({
      next: (item: Post[]) => {
        console.log(item)
      }
    })
  }
  public threePostPosts = (): void => {
    this.service.postPosts().subscribe({
      next: (item: Post[]) => {
        console.log(item)
      }
    })
  }
  public fourErrorPost = (): void => {
    this.service.errorPost().subscribe({
      next: (item: Post[]) => {
        console.log(item)
      },
      error: (er: HttpErrorResponse) => {
        if (er.status === 404) {
          console.log(er.message)
        }
      }
    })
  }

  public fiveGetSendHeaders = () => {
    this.service.getSendHeaders().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  public sixDeletePost = (): void => {
    this.service.deletePost().subscribe({
      next: (response: Post) => {
        console.log(response);
      }
    })
  }
}
