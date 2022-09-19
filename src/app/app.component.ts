import { Component } from '@angular/core';
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
  constructor() {}
}
