import { AfterViewInit, Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
  bannerText:string;
}

@Component({
  selector: 'code-challenge-business-banner',
  templateUrl: './business-banner.component.html',
  styleUrls: ['./business-banner.component.scss']
})
export class BusinessBannerComponent implements OnInit,AfterViewInit {
  basketCount = 100;
  tiles: Tile = { text: 'order count', urls: 'assets/merchant/banner/count-banner.png',bannerText:''};
  bpObserverSvcSub: Subscription;
  constructor() {
  }

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.text-animation');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.text-animation .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '.an-1',
        opacity: 0,
        duration: 800,
        easing: "easeOutExpo",
        delay: 800
      });
  }
}
