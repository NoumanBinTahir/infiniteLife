import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-choice-modal',
  templateUrl: './choice-modal.component.html',
  styleUrls: ['./choice-modal.component.scss'],
})
export class ChoiceModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void  {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}