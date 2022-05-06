import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetPageRoutingModule } from './modal-sheet-routing.module';

import { ModalSheetPage } from './modal-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetPageRoutingModule
  ],
  declarations: [ModalSheetPage]
})
export class ModalSheetPageModule {}
