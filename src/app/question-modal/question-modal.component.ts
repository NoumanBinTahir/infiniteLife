import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss'],
})
export class QuestionModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void  {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}