import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JobsModalComponent } from './jobs-modal/jobs-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Infinite Life', url: '/folder/Inbox', icon: 'mail' },
    { title: 'New Life', url: '/home', icon: 'home' },
    
  ];
  public labels = ['New Life', 'Save Life', 'Accessories', 'Careers', 'Help', 'Settings'];
  constructor(private modalCtrl: ModalController) {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  async openJobs() {
    const modal = await this.modalCtrl.create({
      component: JobsModalComponent,
      cssClass: 'jobs-modal-class',
    });
    await modal.present();
  }
}
