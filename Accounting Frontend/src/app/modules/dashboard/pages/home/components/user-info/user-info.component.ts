import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../user/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

}
