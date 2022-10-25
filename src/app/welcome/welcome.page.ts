import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit 
{
  constructor(private route: Router) { }
  ngOnInit() {
  }
  nextpage() {
    this.route.navigate(['/home']);
  }
  onSlideChange(swiper :any)
  {
    console.log(swiper[0].activeIndex)
  }
  setSwiperInstance(swiper : any)
  {
    console.log(swiper.activeIndex)
  }
}
