import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {GraphicService} from '../../services/graphic.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chart-graphics',
  templateUrl: './chart-graphics.component.html',
  styleUrls: ['./chart-graphics.component.css']
})
export class ChartGraphicsComponent implements OnInit, OnDestroy {
  chart: any;
  options = {
    chart: {
      type: 'line',
      height: 350,
    },
    series: [{
      name: 'Price',
      data: [],
    }],
    grid: {
      clipMarkers: false,
    },
    theme: {
      mode: 'dark',
    },
    xaxis: {
      categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    },
    yaxis: {
      title: {
        style: {
          color: 'white',
          fontSize: 'large'
        }
      }
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: ''
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    }
  };
  subscription: Subscription;

  constructor(private graphicService: GraphicService) {
    this.subscription = this.graphicService.data.subscribe(async data => {
      this.options.series[0].data = data;
      this.chart = await new ApexCharts(document.querySelector('#chart'), this.options);
      await this.chart.render();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
