import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import {AuthenticationRouting} from './authentication.routing';
import {SharedModule} from '../../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedModule
  ]
})
export class AuthenticationModule { }
