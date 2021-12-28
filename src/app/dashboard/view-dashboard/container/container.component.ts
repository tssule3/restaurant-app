import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  container: any;
  constructor(private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe((d) => {
      console.log('d',d);
      this.container = (d.id).toUpperCase();
    })
  }

  ngOnInit(): void {
  }

}
