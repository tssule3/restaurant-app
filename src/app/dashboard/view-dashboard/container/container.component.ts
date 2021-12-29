import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  rowLabelData: any = {};
  @Input() rowOneLabel = '';
  @Input() rowTwoLabel = '';
  @Input() rowThreeLabel = '';
  @Input() rowFourLabel = '';
  @Input() rowFiveLabel = '';
  @Input() rowSixLabel = '';
  @Input() rowSevenLabel = '';
  @Input() rowEightLabel = '';
  containerText: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.rowLabelData = this.router.getCurrentNavigation()?.extras.state?.data[0];
    // activatedRoute.params.subscribe((d) => {
    //   this.container = (d.id).toUpperCase();
    // })
    // console.log('act', activatedRoute);
  }

  ngOnInit(): void {
    const containerText = JSON.parse(sessionStorage.getItem('paramsData') || '');
    this.setRowLabel(this.rowLabelData || containerText[0]);
  }

  setRowLabel(containerText: any) {
      this.containerText = containerText?.type?.toUpperCase();
  }
}
