import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.css'],
})
export class StatsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
