import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {InvoiceService} from '../../services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService) {
    this.subscription = this.invoiceService.invoices.subscribe(data => {
      this.invoices = data;
    });
  }

  ngOnInit(): void {
    this.invoiceService.getInvoices();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
