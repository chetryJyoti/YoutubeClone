import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetDotsPage } from './modal-sheet-dots.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetDotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetDotsPageRoutingModule {}
