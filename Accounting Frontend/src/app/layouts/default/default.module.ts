import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultRouting} from './default.routing';
import { DefaultComponent } from './default.component';
import {SharedModule} from '../../shared/shared.module';
import {HeaderComponent} from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [DefaultComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    DefaultRouting,
    SharedModule,
    MatIconModule,
  ]
})
export class DefaultModule { }
