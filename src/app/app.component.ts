import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {GetDataService} from "./services/get-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public items!: MenuItem[];


  constructor(public service: GetDataService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Главная',
        routerLink: '/',

      },
      {
        label: 'Все посты',
        routerLink: '/posts',
      },
      {
        label: 'Сменить на Admin',
        command: () => this.service.role = "admin"
      },
      {
        label: 'Сменить на User',
        command: () => this.service.role = 'user'
      },
    ]
  }
}
