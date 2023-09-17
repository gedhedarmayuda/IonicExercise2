import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibblePageRoutingModule } from './bibble-routing.module';

import { BibblePage } from './bibble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibblePageRoutingModule
  ],
  declarations: [BibblePage]
})
export class BibblePageModule {}
