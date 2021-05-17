import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './modules/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loading = true;

  constructor(private userService: UserService) {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userService.revokeUserImageURL();
  }
}
