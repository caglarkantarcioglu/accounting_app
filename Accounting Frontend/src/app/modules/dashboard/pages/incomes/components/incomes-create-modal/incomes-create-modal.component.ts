import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IncomeService} from '../../../../services/income.service';

@Component({
  selector: 'app-incomes-create-modal',
  templateUrl: './incomes-create-modal.component.html',
  styleUrls: ['./incomes-create-modal.component.css']
})
export class IncomesCreateModalComponent implements OnInit {
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

  constructor(private incomesService: IncomeService) {
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
    this.incomesService.createIncome({
      income: {...this.form.value},
      invoice: this.fileSelected
    }, this.fileData);
  }
}
