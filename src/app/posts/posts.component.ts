import {Component, OnInit} from '@angular/core';
import {GetDataService, Posts} from "../services/get-data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Posts[] = [];

  constructor(private service: GetDataService) {
  }

  ngOnInit() {
    return this.service.getData().subscribe({
      next: (val: Posts[]) => {
        this.posts = val;
      }
    })
  }

}
