import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'embebed', pathMatch: 'full' },  
  {
    path: 'embebed',
    loadChildren: () => import('./embebed/embebed.module').then( m => m.EmbebedPageModule)
  },
  {
    path: 'creador-embebed',
    loadChildren: () => import('./creador-embebed/creador-embebed.module').then( m => m.CreadorEmbebedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
