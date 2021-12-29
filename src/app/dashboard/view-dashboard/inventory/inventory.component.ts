import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
inventoryData =   {'type': 'inventory',
rowOneLabel : 'Sr no.',
rowTwoLabel : 'Item',
rowThreeLabel : 'Available-Quantity',
rowFourLabel : 'Cost',
rowFiveLabel : 'Total Amount',
rowSixLabel : 'Requested By',
rowSevenLabel : 'Requested Quantity',
rowEightLabel : 'Approve/Reject',
rowNineLabel : '',
rowTenLabel : ''};
  constructor() { }

  ngOnInit(): void {
  }

}
