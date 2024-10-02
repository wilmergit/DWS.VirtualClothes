import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyClothingPageRoutingModule } from './my-clothing-routing.module';

import { MyClothingPage } from './my-clothing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyClothingPageRoutingModule
  ],
  declarations: [MyClothingPage]
})
export class MyClothingPageModule {}
