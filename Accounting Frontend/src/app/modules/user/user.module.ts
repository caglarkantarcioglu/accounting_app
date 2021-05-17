import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouting} from './user.routing';
import {SharedModule} from '../../shared/shared.module';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';



@NgModule({
  declarations: [UserComponent, ChangePasswordModalComponent],
  imports: [
    CommonModule,
    UserRouting,
    SharedModule
  ]
})
export class UserModule { }
