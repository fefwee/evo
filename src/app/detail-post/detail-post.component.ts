import {Component} from '@angular/core';
import {GetDataService, Posts} from "../services/get-data.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {

  private id!: number;
  public detailPost: Posts = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private service: GetDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPostId(this.id).subscribe({
      next: (post: Posts) => {
        this.detailPost = post;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    })
  }
}
