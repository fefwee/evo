import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from "@angular/common/http";
import {RequestService} from "./services/request.service";
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
