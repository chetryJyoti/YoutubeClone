import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetPage } from './modal-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetPageRoutingModule {}
