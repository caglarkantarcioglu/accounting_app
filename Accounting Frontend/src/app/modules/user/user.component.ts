import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ChangePasswordModalComponent} from './components/change-password-modal/change-password-modal.component';
import {HttpService} from '../../core/services/http.service';
import {ImageCropperComponent} from '../../shared/components/image-cropper/image-cropper.component';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(this.userService.user.firstName, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(255)]),
    lastName: new FormControl(this.userService.user.lastName, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(255)]),
    email: new FormControl(this.userService.user.email, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(255)]),
  });
  profilePicture: any;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private http: HttpService) {
  }

  ngOnInit(): void {
    this.profilePicture = this.userService.user.profile_image;
  }

  updateUser(): void {
    this.http.patch('/user', this.form.value);
  }

  openChangePassword(): void {
    this.dialog.open(ChangePasswordModalComponent);
  }

  selectFile(): void {
    $('#user-image').trigger('click');
  }

  fileChange(event: any): void {
    const modalRef = this.dialog.open(ImageCropperComponent);
    modalRef.componentInstance.event = event;
  }
}
