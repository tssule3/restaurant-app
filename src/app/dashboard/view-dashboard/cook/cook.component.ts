import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cookData = { 'type': 'cook',
  rowOneLabel : 'Sr no.',
  rowTwoLabel : 'Order In Progress',
  rowThreeLabel : 'Order In Queue',
  rowFourLabel : 'Update Orders',
  rowFiveLabel : 'Request New Item',
  rowSixLabel : 'Update Food Quantity',
  rowSevenLabel : 'Date',
  rowEightLabel : 'Employee Management'
  };
}
