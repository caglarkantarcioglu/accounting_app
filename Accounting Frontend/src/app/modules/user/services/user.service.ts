import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {AuthService} from '../../../layouts/authentication/services/auth.service';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: { firstName: string, lastName: string, email: string, profile_image: any, money: number };
  imageUrl: any;
  urlCreator = window.URL || window.webkitURL;


  constructor(private http: HttpService, private sanitizer: DomSanitizer) {
  }

  async Initalize(user): Promise<any> {
    await this.setUser(user);
    await this.setUserImage();
    await this.getUserMoney();
  }

  async setUserImage(): Promise<any> {
    await this.http.get('/user/image')
      .then(async res => {
        if (res === false) {
          this.user.profile_image = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';
        } else {
          const arrayBufferView = await new Uint8Array(res.data);
          const blob = await new Blob([arrayBufferView], {type: 'image/jpeg'});
          this.imageUrl = await this.urlCreator.createObjectURL(blob);
          this.user.profile_image = await this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
        }
      }).catch(err => {
        this.user.profile_image = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';
      });
  }

  setUser(user): void {
    this.user = {...user};
  }

  getUserMoney(): void {
    this.http.get('/user/money')
      .then(res => {
        this.user.money = res;
      });
  }

  revokeUserImageURL(): void {
    this.urlCreator.revokeObjectURL(this.imageUrl);
  }
}
