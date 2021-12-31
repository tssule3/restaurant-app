import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  rowOneLabel = 'Sr no.';
  rowTwoLabel = 'Order In Progress';
  rowThreeLabel = 'Order In Queue';
  rowFourLabel = 'Update Orders';
  rowFiveLabel = 'Request New Item';
  rowSixLabel = 'Update Food Quantity';
  rowSevenLabel = 'Date';
  rowEightLabel = 'Employee Management';
  showDate = true;
  rowLabelData: any;
  containerText: any;

  constructor() { }

  ngOnInit(): void {
    const containerText = JSON.parse(sessionStorage.getItem('paramsData') || '');
    this.setRowLabel(this.rowLabelData || containerText[0]);
  }

  setRowLabel(containerText: any) {
    this.containerText = containerText?.type?.toUpperCase();
  }
}