import {Component} from '@angular/core';
import {Post} from "../../interface/types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  public post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (res) => {
        console.log(res);
        this.post = res[0];
      }
    })
  };
}
