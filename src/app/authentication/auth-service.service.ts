import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  checkIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  updateUserLoggedInStatus(userLoggedIn: boolean) {
    this.isUserLoggedIn.next(userLoggedIn);
  }
}
