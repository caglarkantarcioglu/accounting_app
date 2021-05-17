import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExpenseService} from '../../../../services/expense.service';
import {InvoiceService} from '../../../../services/invoice.service';

@Component({
  selector: 'app-expenses-update-modal',
  templateUrl: './expenses-update-modal.component.html',
  styleUrls: ['./expenses-update-modal.component.css']
})
export class ExpensesUpdateModalComponent implements OnInit {
  @Input() expense: any;

  form: any;
  fileData: any = new FormData();
  fileSelected = false;

  constructor(private expenseService: ExpenseService, private invoiceService: InvoiceService) {
  }

  fileInputEvent(): void {
    if (this.expense.invoice) {
      this.invoiceService.deleteInvoice(this.expense.id);
      this.expense.invoce = null;
    } else {
      $('#formFile').trigger('click');
    }
  }

  fileChange(event: any): void {
    this.fileSelected = true;
    this.fileData.delete('document');
    const file = event.target.files[0];
    this.fileData.append('document', file);
    this.invoiceService.addInvoice('expense', this.expense.id, this.fileData);
    this.expense.invoce = {};
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.expense.id),
      title: new FormControl(this.expense.title, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)]),
      content: new FormControl(this.expense.content, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)]),
      price: new FormControl(this.expense.price, [
        Validators.required,
        Validators.min(0)]),
      date: new FormControl(this.expense.date, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)])
    });
  }

  update(): void {
    this.expenseService.updateExpense(this.form.value);
  }
}
