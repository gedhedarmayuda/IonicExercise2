import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibblePage } from './bibble.page';

const routes: Routes = [
  {
    path: '',
    component: BibblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibblePageRoutingModule {}
