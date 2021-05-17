import {Component, Input, OnInit} from '@angular/core';
import {AnimationRoutingService} from '../../services/animation-routing.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() routeName: string;

  constructor(private routerService: AnimationRoutingService) {
  }

  ngOnInit(): void {
  }

  route(): void {
    this.routerService.slideRoute(['home']);
  }

}
