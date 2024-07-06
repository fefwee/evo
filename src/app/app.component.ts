import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentDate!: string;
  public items!: MenuItem[];
  public home!: MenuItem;

  ngOnInit() {
    this.items = [{label: 'Computer'}, {label: 'Notebook'}, {label: 'Accessories'}, {label: 'Backpacks'}, {label: 'Item'}];
    this.home = {icon: 'pi pi-home', routerLink: '/'};

    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
}
