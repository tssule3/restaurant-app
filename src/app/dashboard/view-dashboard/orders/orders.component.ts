import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orderData =   {'type': 'orders',
rowOneLabel : '0',
rowTwoLabel : '1',
rowThreeLabel : '2',
rowFourLabel : '3',
rowFiveLabel : '4',
rowSixLabel : '5',
rowSevenLabel : '6',
rowEightLabel : '7',
rowNineLabel : '8',
rowTenLabel : '9'};
  constructor() { }

  ngOnInit(): void {
  }

}
