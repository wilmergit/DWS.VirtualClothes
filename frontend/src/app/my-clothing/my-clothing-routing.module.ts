import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyClothingPage } from './my-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: MyClothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyClothingPageRoutingModule {}
