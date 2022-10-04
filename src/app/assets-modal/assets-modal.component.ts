import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assets-modal',
  templateUrl: './assets-modal.component.html',
  styleUrls: ['./assets-modal.component.scss'],
})
export class AssetsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
 