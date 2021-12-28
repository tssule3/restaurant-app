import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../authentication/auth-service.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {
  isMenuCollapsed = true;
  isUserLoggedIn = false;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.checkIsUserLoggedIn().subscribe((d) => {
      this.isUserLoggedIn = d;
    });
    console.log('user header nav', this.isUserLoggedIn);
  }

  updateUserLoggedInStatus() {
    this.authService.updateUserLoggedInStatus(false);
    console.log('user logged in on logout', this.isUserLoggedIn);
  }

}
