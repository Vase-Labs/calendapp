import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { EmbebedPage } from './embebed.page';
import { NgCalendarModule  } from 'ionic2-calendar';

import { CreadorEmbebedPage } from '../creador-embebed/creador-embebed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmbebedPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [EmbebedPage,CreadorEmbebedPage],
  exports : [CreadorEmbebedPage]
})
export class EmbebedPageModule {}
