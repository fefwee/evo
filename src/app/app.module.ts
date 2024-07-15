import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {PostsComponent} from './posts/posts.component';
import {GetDataService} from "./services/get-data.service";
import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {MenubarModule} from 'primeng/menubar';
import {DetailPostComponent} from './detail-post/detail-post.component';
import {ButtonModule} from 'primeng/button';
import {EditComponent} from './edit/edit.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {roleAccessGuard} from "./guard/guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostsComponent,
    DetailPostComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    InputTextModule
  ],
  providers: [GetDataService, {
    provide: 'roleAccessGuard',
    useValue: roleAccessGuard
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
