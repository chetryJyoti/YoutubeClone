import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSheetPage } from '../modal-sheet/modal-sheet.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private modalCtrl: ModalController) {}

  async addModal(){
    const modal =await this.modalCtrl.create({
      component:ModalSheetPage,
      breakpoints:[0.5],
      initialBreakpoint:0.5,
      handle:false
    });
    await modal.present();
  }

}
