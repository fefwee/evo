import {Component} from '@angular/core';
import {interval, map, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public orderStream$!: Subscription | null;
  public randomStream$!: Subscription | null;
  public orderNum: number[] = [];
  public randomNum: string[] = [];


  public orderStartStream = (): void => {
    if (this.orderStream$) {
      this.unsubscribeOrderStream();
    }
    const orderInterval = interval(2000);
    this.orderStream$ = orderInterval.subscribe((val) => this.orderNum.push(val));
  }

  public randomStartStream = (): void => {
    if (this.randomStream$) {
      this.unsubscribeRandomStream();
    }
    const randomInterval = interval(2000);
    this.randomStream$ = randomInterval.pipe(
      map(() => `Random Value: ${Math.floor(Math.random() * 100)}`)
    ).subscribe((val) => this.randomNum.push(val));
  }

  public startAllStream = (): void => {
    this.orderStartStream();
    this.randomStartStream();
  }

  public unsubscribeOrderStream = (): void => {
    if (this.orderStream$) {
      this.orderStream$.unsubscribe();
      this.orderStream$ = null;
    }
  }

  public unsubscribeRandomStream = (): void => {
    if (this.randomStream$) {
      this.randomStream$.unsubscribe();
      this.randomStream$ = null;
    }
  }

  constructor() {
  }
}
