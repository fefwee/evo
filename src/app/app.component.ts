import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private meta: Meta,
              private titleService: Title
  ) {
    this.meta.addTag({property: "og:desc", content: "root_desc "})
  }

  ngOnInit(): void {
    this.titleService.setTitle('Desk Page');
  }
}
