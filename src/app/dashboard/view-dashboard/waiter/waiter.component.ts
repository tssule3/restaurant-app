import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  waiterData = {'type': 'waiter',
    rowOneLabel : '0',
  rowTwoLabel : '1',
  rowThreeLabel : '2',
  rowFourLabel : '3',
  rowFiveLabel : '4',
  rowSixLabel : '5',
  rowSevenLabel : '6',
  rowEightLabel : '7',
  rowNineLabel : '8',
  rowTenLabel : '9'}
  constructor() { }

  ngOnInit(): void {
  }

}
