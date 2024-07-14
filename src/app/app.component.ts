import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from "./components/dynamic/dynamic.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('dynamic', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicComponent>;

  public addComponent = () => {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponent);
  }

  public deleteComponent = () => {
    this.viewRef.clear();
  }
}
