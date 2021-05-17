import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnimationRoutingService {

  constructor(private router: Router) {
  }

  slideRoute(commands: any[]): void {
    $('.content').removeClass('slide-left');
    setTimeout(() => {
      $('.content').addClass('slide-left');
      setTimeout(() => {
        this.router.navigate(commands);
      }, 1000);
    }, 100);

  }
}
