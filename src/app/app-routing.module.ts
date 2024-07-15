import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {DetailPostComponent} from "./detail-post/detail-post.component";
import {EditComponent} from "./edit/edit.component";
import {ErrorComponent} from "./error/error.component";
import {roleAccessGuard} from "./guard/guard.guard";

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: DetailPostComponent,
    canActivateChild: [roleAccessGuard],
    children: [
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
