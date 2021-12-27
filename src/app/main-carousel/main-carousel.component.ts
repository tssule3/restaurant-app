import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {
  images = ['../assets/slider-1.jpg','../assets/slider-2.jpg','../assets/slider-3.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
