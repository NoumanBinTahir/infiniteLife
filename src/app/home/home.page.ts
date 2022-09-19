import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) modal1: IonModal;
  constructor() { }

  ngOnInit() {
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  cancel1() {
    this.modal1.dismiss(null, 'cancel');
  }
}
