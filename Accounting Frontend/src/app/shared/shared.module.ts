import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {HttpClientModule} from '@angular/common/http';
import {PreloaderComponent} from './components/preloader/preloader.component';
import {DeleteConfirmComponent} from './components/delete-confirm/delete-confirm.component';
import {MaterialDesignModule} from './modules/material-design/material-design.module';
import {ImageCropperComponent} from './components/image-cropper/image-cropper.component';
import {ImageCropperModule} from 'ngx-image-cropper';


@NgModule({
  declarations: [PageHeaderComponent, PreloaderComponent, DeleteConfirmComponent, ImageCropperComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule,
    ImageCropperModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialDesignModule,
    PageHeaderComponent,
    DeleteConfirmComponent,
    PreloaderComponent,
    ImageCropperComponent,
    ImageCropperModule
  ]
})
export class SharedModule {
}
