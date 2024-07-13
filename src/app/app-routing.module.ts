import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from "./components/second/second.component";
import {PreFetchingResolver} from "./resolve/pre-fetching.resolver";

const routes: Routes = [
  {
    path: 'second',
    component: SecondComponent,
    resolve: [PreFetchingResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
