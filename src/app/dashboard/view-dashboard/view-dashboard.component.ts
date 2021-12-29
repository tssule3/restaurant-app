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
  {'type': 'cook'},
  {'type': 'waiter'},
  {'type': 'orders'},
  {'type': 'inventory'},
  {'type': 'pickup'},
  {'type': 'parking'}
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
    const paramsData = this.sendExtraParams(param);
    sessionStorage.setItem('paramsData', JSON.stringify(paramsData));
    this.router.navigateByUrl(`dashboard/${param}`, { state: { data: paramsData } });
  }
}
