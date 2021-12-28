import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  rowLabelData: any = {};
  rowOneLabel = '';
  rowTwoLabel = '';
  rowThreeLabel = '';
  rowFourLabel = '';
  rowFiveLabel = '';
  rowSixLabel = '';
  rowSevenLabel = '';
  rowEightLabel = '';
  container: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log('state =>',this.router.getCurrentNavigation()?.extras.state);
    this.rowLabelData = this.router.getCurrentNavigation()?.extras.state?.data[0];
    this.rowOneLabel = this.rowLabelData?.rowOneLabel;
    this.rowTwoLabel = this.rowLabelData?.rowTwoLabel;
    this.rowThreeLabel = this.rowLabelData?.rowThreeLabel;
    this.rowFourLabel = this.rowLabelData?.rowFourLabel;
    this.rowFiveLabel = this.rowLabelData?.rowFiveLabel;
    this.rowSixLabel = this.rowLabelData?.rowSixLabel;
    this.rowSevenLabel = this.rowLabelData?.rowSevenLabel;
    this.rowEightLabel = this.rowLabelData?.rowEightLabel;
    // activatedRoute
    activatedRoute.params.subscribe((d) => {
      console.log('d', d);
      this.container = (d.id).toUpperCase();
    })
  }

  ngOnInit(): void {
  }

}
