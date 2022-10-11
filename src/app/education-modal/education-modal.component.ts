import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.scss'],
})
export class EducationModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void  {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}