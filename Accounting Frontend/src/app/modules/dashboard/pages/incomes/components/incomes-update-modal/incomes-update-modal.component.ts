import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExpenseService} from '../../../../services/expense.service';
import {IncomeService} from '../../../../services/income.service';

@Component({
  selector: 'app-expenses-update-modal',
  templateUrl: './incomes-update-modal.component.html',
  styleUrls: ['./incomes-update-modal.component.css']
})
export class IncomesUpdateModalComponent implements OnInit {
  @Input() income: any;

  form: any;

  constructor(private incomeService: IncomeService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.income.id),
      title: new FormControl(this.income.title, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)]),
      content: new FormControl(this.income.content, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)]),
      price: new FormControl(this.income.price, [
        Validators.required,
        Validators.min(0)]),
      date: new FormControl(this.income.date, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)])
    });
  }

  update(): void {
    this.incomeService.updateIncome(this.form.value);
  }
}
