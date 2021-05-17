import {Component, Input, OnInit} from '@angular/core';
import {base64ToFile, ImageCroppedEvent} from 'ngx-image-cropper';
import {HttpService} from '../../../core/services/http.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {
  @Input() event: any;
  image: any;
  imageChangedEvent: any = '';

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.imageChangedEvent = this.event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.image = event.base64;
  }

  imageLoaded(): void {
  }

  cropperReady(): void {
    // cropper ready
  }

  loadImageFailed(): void {
    // show message
  }

  saveCroppedImage(): void {
  }

  async upload(): Promise<any> {
    const fd = await new FormData();
    await fd.append('profile-image', base64ToFile(this.image));
    await this.http.post('/user/image', fd);
    location.reload();
  }


}
