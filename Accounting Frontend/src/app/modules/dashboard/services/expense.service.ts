import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpService} from '../../../core/services/http.service';
import {UserService} from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  expenseTypes = [{type: 'today'}, {type: 'month'}, {type: 'all'}];

  constructor(private http: HttpService , private userService: UserService) {
  }

  getExpenses(index): void {
    this.http.get('/expense/' + this.expenseTypes[index].type)
      .then(res => {
        this.expenses.next(res);
        this.userService.getUserMoney();
      });
  }

  createExpense(body, formData?): void {
    this.http.post('/expense', body)
      .then(res => {
        if (res.id && res !== true && formData) {
          this.http.post('/invoice/' + res.id, formData);
        }
      });
  }

  updateExpense(body): void {
    this.http.patch('/expense', body);
  }

  async deleteExpense(id: number): Promise<any> {
    return this.http.delete('/expense/' + id);
  }
}
