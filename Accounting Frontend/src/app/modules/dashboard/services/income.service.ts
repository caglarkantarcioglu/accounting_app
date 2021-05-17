import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';
import {UserService} from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomes: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  incomeTypes = [{type: 'today'}, {type: 'month'}, {type: 'all'}];

  constructor(private http: HttpService , private userService: UserService) {
  }

  getIncomes(index): void {
    this.http.get('/income/' + this.incomeTypes[index].type)
      .then(res => {
        this.incomes.next(res);
        this.userService.getUserMoney();
      });
  }

  createIncome(body, formData?): void {
    this.http.post('/income', body)
      .then(res => {
        if (res.id && res !== true && formData) {
          this.http.post('/invoice/' + res.id, formData);
        }
      });
  }

  updateIncome(body): void {
    this.http.patch('/income', body);
  }

  async deleteIncome(id: number): Promise<any> {
    return this.http.delete('/income/' + id);
  }
}
