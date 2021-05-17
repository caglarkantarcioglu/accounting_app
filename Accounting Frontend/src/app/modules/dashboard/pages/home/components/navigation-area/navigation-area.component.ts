import {Component, OnInit} from '@angular/core';
import {AnimationRoutingService} from '../../../../../../shared/services/animation-routing.service';

@Component({
  selector: 'app-navigation-area',
  templateUrl: './navigation-area.component.html',
  styleUrls: ['./navigation-area.component.css']
})
export class NavigationAreaComponent implements OnInit {

  constructor(public routeService: AnimationRoutingService) {
  }

  ngOnInit(): void {
  }

}
