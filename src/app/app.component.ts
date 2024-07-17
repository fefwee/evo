import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {TodoState} from './store/todo.state';
import {AddTodo, TodoInterface,} from "./store/model/todo.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    "title": new FormControl("")
  });

  public todos: TodoInterface[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(TodoState.getTodo).subscribe({
      next: (todo: TodoInterface[]) => {
        this.todos = todo;
      }
    })
  }


  public addTodo(): void {
    this.store.dispatch(new AddTodo({title: this.form.value.title}));
    this.form.reset();
  };
}
