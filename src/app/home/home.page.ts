import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivityModalComponent } from '../activity-modal/activity-modal.component';
import { AssetsModalComponent } from '../assets-modal/assets-modal.component';
import { ChoiceModalComponent } from '../choice-modal/choice-modal.component';
import { EducationModalComponent } from '../education-modal/education-modal.component';
import { QuestionModalComponent } from '../question-modal/question-modal.component';
import { RelationshipModalComponent } from '../relationship-modal/relationship-modal.component';
import { StatsModalComponent } from '../stats-modal/stats-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private modalCntrl: ModalController) {}

  ngOnInit() {}
  async openStats() {
    const modal = await this.modalCntrl.create({
      component: StatsModalComponent,
      cssClass: 'stats-modal-class',
    });
    await modal.present();
  }
  async openActivity() {
    const modal = await this.modalCntrl.create({
      component: ActivityModalComponent,
      cssClass: 'activity-modal-class',
    });
    await modal.present();
  }
  async openAssets() {
    const modal = await this.modalCntrl.create({
      component: AssetsModalComponent,
      cssClass: 'Asset-modal-class',
    });
    await modal.present();
  }
  async openEducation() {
    const modal = await this.modalCntrl.create({
      component: EducationModalComponent,
      cssClass: 'Edu-modal-class',
    });
    await modal.present();
  }
  async openRelationship() {
    const modal = await this.modalCntrl.create({
      component: RelationshipModalComponent,
      cssClass: 'Relation-modal-class',
    });
    await modal.present();
  }

async openQuestion() {
  const modal = await this.modalCntrl.create({
    component: QuestionModalComponent,
    cssClass: 'Question-modal-class',
  });
  await modal.present();
}
async openChoice() {
  const modal = await this.modalCntrl.create({
    component: ChoiceModalComponent,
    cssClass: 'Choice-modal-class',
  });
  await modal.present();
}
}