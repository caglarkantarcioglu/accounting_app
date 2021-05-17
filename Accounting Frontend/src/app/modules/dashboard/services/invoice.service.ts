import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoices: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpService) {
  }

  getInvoices(): void {
    this.http.get('/invoice')
      .then(res => {
        this.invoices.next(res);
      });
  }

  openInvoicePDF(id: number): void {
    this.http.get('/invoice/' + id)
      .then(res => {
        const arrayBufferView = new Uint8Array(res.data);
        const blob = new Blob([arrayBufferView], {type: 'application/pdf'});
        const urlCreator = window.URL || window.webkitURL;
        const pdfUrl = urlCreator.createObjectURL(blob);
        open(pdfUrl, '_blank');
        urlCreator.revokeObjectURL(pdfUrl);
      });

  }

  deleteInvoice(id): void {
    this.http.delete('/invoice/' + id)
      .then(res => {
        this.getInvoices();
      });
  }

  addInvoice(type: 'expense' | 'income', id, formData): void {
    console.log(formData.get('document'));
    this.http.patch('/' + type + '/invoice', {id}).then(res => {
      console.log(res);
      this.http.post('/invoice/' + res.id, formData);
    });
  }
}
