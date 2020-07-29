import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreadorEmbebedPage } from './creador-embebed.page';

const routes: Routes = [
  {
    path: '',
    component: CreadorEmbebedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreadorEmbebedPageRoutingModule {}
