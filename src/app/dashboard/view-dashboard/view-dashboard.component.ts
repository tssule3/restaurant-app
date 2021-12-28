import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
isUserLoggedIn = false;
navigationObject = {};
rowLabelDataSource = [
  {'type': 'cook',
  rowOneLabel : '0',
  rowTwoLabel : '1',
  rowThreeLabel : '2',
  rowFourLabel : '3',
  rowFiveLabel : '4',
  rowSixLabel : '5',
  rowSevenLabel : '6',
  rowEightLabel : '7',
  rowNineLabel : '8',
  rowTenLabel : '9'},
  {'type': 'waiter',
    rowOneLabel : '0',
  rowTwoLabel : '1',
  rowThreeLabel : '2',
  rowFourLabel : '3',
  rowFiveLabel : '4',
  rowSixLabel : '5',
  rowSevenLabel : '6',
  rowEightLabel : '7',
  rowNineLabel : '8',
  rowTenLabel : '9'},
  {'type': 'orders',
    rowOneLabel : '0',
  rowTwoLabel : '1',
  rowThreeLabel : '2',
  rowFourLabel : '3',
  rowFiveLabel : '4',
  rowSixLabel : '5',
  rowSevenLabel : '6',
  rowEightLabel : '7',
  rowNineLabel : '8',
  rowTenLabel : '9'},

  {'type': 'inventory',
    rowOneLabel : 'Sr no.',
  rowTwoLabel : 'Item',
  rowThreeLabel : 'Available-Quantity',
  rowFourLabel : 'Cost',
  rowFiveLabel : 'Total Amount',
  rowSixLabel : 'Requested By',
  rowSevenLabel : 'Requested Quantity',
  rowEightLabel : 'Approve/Reject',
  rowNineLabel : '',
  rowTenLabel : ''},

  {'type': 'pickup',
    rowOneLabel : '0',
  rowTwoLabel : '1',
  rowThreeLabel : '2',
  rowFourLabel : '3',
  rowFiveLabel : '4',
  rowSixLabel : '5',
  rowSevenLabel : '6',
  rowEightLabel : '7',
  rowNineLabel : '8',
  rowTenLabel : '9'},

  {'type': 'parking',
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
];
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log('user', this.isUserLoggedIn);
    this.authService.updateUserLoggedInStatus(true);
    this.authService.checkIsUserLoggedIn().subscribe((d) => {
      this.isUserLoggedIn = d;
    });
    console.log('user', this.isUserLoggedIn);
  }
  sendExtraParams(type: any) {
    return this.rowLabelDataSource.filter((d: any) => {
      if(d.type == type) {
        console.log('sendExtraParams', d);
        return d;
      }
    });
  }
  navigateWithState(param: any) {
    this.router.navigateByUrl(`dashboard/${param}`, { state: { data: this.sendExtraParams(param) } });
  }
}
