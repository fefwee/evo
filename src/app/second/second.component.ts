import {Component} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})


export class SecondComponent {


  public count = 0;

  constructor() {
  }

  public increment = () => {
    this.count++;
  }
  public decrement = () => {
    this.count--;
  }


}
