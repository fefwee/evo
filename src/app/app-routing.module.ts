import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";
import {ItemComponent} from "./pages/item/item.component";
import {DetailsComponent} from "./components/details/details.component";
import {ListComponent} from "./components/list/list.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
