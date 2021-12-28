import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
isUserLoggedIn = false;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    console.log('user', this.isUserLoggedIn);
    this.authService.updateUserLoggedInStatus(true);
    this.authService.checkIsUserLoggedIn().subscribe((d) => {
      this.isUserLoggedIn = d;
    });
    console.log('user', this.isUserLoggedIn);
  }

}
