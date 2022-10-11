import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relationship-modal',
  templateUrl: './relationship-modal.component.html',
  styleUrls: ['./relationship-modal.component.scss'],
})
export class RelationshipModalComponent implements OnInit {
 
    constructor(private modalCtrl: ModalController) {}
  
    ngOnInit() {}
    dismissModal() {
      this.modalCtrl.dismiss();
    }
  }
  