import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {
  data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpService) {
  }

  getGraphicData(type: '/expense' | '/income', year): void {
    this.http.get(type + '/graphic/' + year);
    this.http.get(type + '/all')
      .then(async (res) => {
        const data = [];
        const month = +new Date().getMonth() + 1;
        for (let i = 1; i <= month; i++) {
          let price = 0;
          const values = await res.filter(value => value.date[6] === i.toString());
          await values.forEach(v => {
            price += v.price;
          });
          data.push(price);
        }
        this.data.next(data);
      });
  }
}
