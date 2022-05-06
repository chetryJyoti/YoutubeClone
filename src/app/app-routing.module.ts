import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-sheet',
    loadChildren: () => import('./modal-sheet/modal-sheet.module').then( m => m.ModalSheetPageModule)
  },
  {
    path: 'modal-sheet-dots',
    loadChildren: () => import('./modal-sheet-dots/modal-sheet-dots.module').then( m => m.ModalSheetDotsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
