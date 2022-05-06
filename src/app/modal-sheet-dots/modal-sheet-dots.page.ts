import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-sheet-dots',
  templateUrl: './modal-sheet-dots.page.html',
  styleUrls: ['./modal-sheet-dots.page.scss'],
})
export class ModalSheetDotsPage implements OnInit {

  dotsItems: any=[
    {
      text:'Save to Watch later',
      icon:'time-outline'
    },
    {
      text:'Save to playlist',
      icon:'bookmarks-outline'
    },
    {
      text:'Download video',
      icon:'download-outline'
    },
    {
      text:'Share',
      icon:'share-outline'
    },
    {
      text:'Not interested',
      icon:'trash-outline'
    },
    {
      text:'Dont recommend channel',
      icon:'trash-outline'
    },
    {
      text:'Report',
      icon:'flag-outline'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
