import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExpenseService} from '../../../../services/expense.service';

@Component({
  selector: 'app-expenses-create-modal',
  templateUrl: './expenses-create-modal.component.html',
  styleUrls: ['./expenses-create-modal.component.css']
})
export class ExpensesCreateModalComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(0)]),
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)])
  });
  fileData: any = new FormData();
  fileSelected = false;

  constructor(private expenseService: ExpenseService) {
  }

  openFileInput(): void {
    $('#formFile').trigger('click');
  }

  fileChange(event: any): void {
    this.fileSelected = true;
    this.fileData.delete('document');
    const file = event.target.files[0];
    this.fileData.append('document', file);
  }

  ngOnInit(): void {
  }

  create(): void {
    this.expenseService.createExpense({
      expense: {...this.form.value},
      invoice: this.fileSelected
    }, this.fileData);
  }
}
