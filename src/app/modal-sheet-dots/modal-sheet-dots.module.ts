import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetDotsPageRoutingModule } from './modal-sheet-dots-routing.module';

import { ModalSheetDotsPage } from './modal-sheet-dots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetDotsPageRoutingModule
  ],
  declarations: [ModalSheetDotsPage]
})
export class ModalSheetDotsPageModule {}
