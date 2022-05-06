import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/data/home.json';
import { ModalSheetDotsPage } from '../modal-sheet-dots/modal-sheet-dots.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  videos = [];
  segments: any[] = [];
  constructor( private modalCtrl: ModalController) {
    this.segments = [
      'Explore',
      'All',
      'Cryptocurrency',
      'Gaming',
      'Stock markets',
      'Musics',
      'Elon Musk',
      'Computers',
    ].map((val) => ({
      title: val,
      seleted: false,
    }));
    console.log(this.segments);
    // this.videos = homeData;

    setTimeout(() => {
      this.selectedSegment(0);
      this.videos = homeData;
    }, 1000);
  }
  selectedSegment(index) {
    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
  }
  async add(){
    const modal =await this.modalCtrl.create({
      component:ModalSheetDotsPage,
      breakpoints:[0.5],
      initialBreakpoint:0.5,
      handle:false
    });
    await modal.present();
  }
}
