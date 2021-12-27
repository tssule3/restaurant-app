import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // comment
  isMenuCollapsed = true;
  images = ['../assets/slider-1.jpg','../assets/slider-2.jpg','../assets/slider-3.jpg'];
}
