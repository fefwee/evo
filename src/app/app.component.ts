import {Component, OnInit} from '@angular/core';
import {ResponseService} from "./service/response.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public responseService: ResponseService) {
  }

  ngOnInit(): void {

  }

}
