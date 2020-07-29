import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbebedPage } from './embebed.page';

const routes: Routes = [
  {
    path: '',
    component: EmbebedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbebedPageRoutingModule {}
