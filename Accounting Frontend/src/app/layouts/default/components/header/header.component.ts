import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/services/auth.service';
import sAlert from '../../../../core/utils/sweetalert';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  logout(): void {
    sAlert.Logout(() => {
      this.authService.logout();
    });
  }

  ngOnInit(): void {
  }

}
