import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../core/services/http.service';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {
  form = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
    ])
  });

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  changePassword(): void {
    if (this.form.value.newPassword !== this.form.value.oldPassword) {
      this.http.patch('/user/change-password', this.form.value);
    }

  }

}
