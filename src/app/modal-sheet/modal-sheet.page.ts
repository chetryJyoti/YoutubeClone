import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sheet',
  templateUrl: './modal-sheet.page.html',
  styleUrls: ['./modal-sheet.page.scss'],
})
export class ModalSheetPage implements OnInit {
  items: any = [
    {
      text: 'Create a Short',
      icon: 'videocam-outline',
    },
    {
      text: 'Upload a video',
      icon: 'arrow-up-outline',
    },
    {
      text: 'Go Live',
      icon: 'radio-outline',
    },
  ];
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  dismiss(){
    this.modalCtrl.dismiss();
  }
}
