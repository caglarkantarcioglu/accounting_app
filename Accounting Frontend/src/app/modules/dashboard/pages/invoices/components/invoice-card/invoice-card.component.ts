import {Component, Input, OnInit} from '@angular/core';
import {InvoiceService} from '../../../../services/invoice.service';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {
  @Input() invoice: any;

  constructor(private invoiceService: InvoiceService) {
  }

  openInvoice(id): void {
    this.invoiceService.openInvoicePDF(id);
  }

  deleteInvoice(id): void {
    this.invoiceService.deleteInvoice(id);
  }

  ngOnInit(): void {
  }

}
