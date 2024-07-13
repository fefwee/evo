import {Component, OnInit} from '@angular/core';
import {GetDataService} from "./services/get-data.service";
import {Todo} from "./interface/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public todo: Todo =
    {
      completed: false,
      id: 0,
      title: "",
      userId: 0
    };

  constructor(private service: GetDataService) {
  }


  ngOnInit(): void {
    this.service.getData().subscribe({
      next: (todo: Todo) => {
        console.log(todo)
        this.todo = todo;
      }
    })
  }


}
