import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {Router} from '@angular/router';
import {UserService} from '../../../modules/user/services/user.service';
import sAlert from '../../../core/utils/sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private router: Router,
    private userService: UserService) {
  }

  async Initialize(): Promise<boolean> {
    return await this.http.get('/authentication').then(res => {
      return this.successAuth(res);
    }).catch(err => {
      return this.errorAuth();
    });
  }

  async successAuth(res): Promise<boolean> {
    await this.userService.Initalize(res);
    return true;
  }

  errorAuth(): boolean {
    this.router.navigate(['login']);
    return false;
  }

  login(user): void {
    this.http.post('/authentication/login', user)
      .then(res => {
        sAlert.TimerSwal('Giriş Başarılı...');
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      }).catch(e => {
      sAlert.Error(e.error.message);
    });
  }

  register(newUser): void {
    this.http.post('/authentication/register', newUser).catch(e => {
      sAlert.Error(e.error.message);
    });
  }

  async signup(): Promise<any> {
  }

  async logout(): Promise<any> {
    this.userService.revokeUserImageURL();
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
