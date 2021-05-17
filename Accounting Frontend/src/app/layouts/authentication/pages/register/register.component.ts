import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{5,}$'),
      Validators.minLength(5),
      Validators.maxLength(255)]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{5,}'),
      Validators.maxLength(255)]),
  });

  constructor(private authService: AuthService) {
  }

  register(): void {
    this.authService.register(this.form.value);
  }

  ngOnInit(): void {
  }

}
