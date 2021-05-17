import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {IncomesCreateModalComponent} from './components/incomes-create-modal/incomes-create-modal.component';
import {IncomeService} from '../../services/income.service';
import {Subscription} from 'rxjs';
import {GraphicService} from '../../services/graphic.service';
import {InvoiceService} from '../../services/invoice.service';
import {DeleteConfirmComponent} from '../../../../shared/components/delete-confirm/delete-confirm.component';
import {ExpensesUpdateModalComponent} from '../expenses/components/expenses-update-modal/expenses-update-modal.component';
import {IncomesUpdateModalComponent} from './components/incomes-update-modal/incomes-update-modal.component';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit, OnDestroy {
  incomes = new MatTableDataSource([]);
  date = new Date();
  subscription: Subscription;
  displayedColumns: string[] = ['title', 'content', 'price', 'date', 'invoice', 'update', 'delete'];
  grahpOpen: boolean;
  selectIndex = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public incomeService: IncomeService,
    private graphicService: GraphicService,
    public invoiceService: InvoiceService
  ) {
    this.subscription = this.incomeService.incomes.subscribe(incomes => {
      this.incomes.data = incomes;
      this.incomes.paginator = this.paginator;
    });
  }

  openGraphic(): void {
    this.graphicService.getGraphicData('/income', this.date.getFullYear());
    this.grahpOpen = true;
  }

  openCreateModal(): void {
    const modalRef = this.dialog.open(IncomesCreateModalComponent, {
      width: '50%',
    });
    modalRef.afterClosed().pipe().toPromise().then(data => {
      this.incomeService.getIncomes(this.selectIndex);
    });
  }

  openInvoice(id): void {
    this.invoiceService.openInvoicePDF(id);
  }

  ngOnInit(): void {
    this.incomeService.getIncomes(this.selectIndex);
  }

  deleteIncome(id): void {
    const deleteConfirm = this.dialog.open(DeleteConfirmComponent, {
      width: '30%',
    });
    deleteConfirm.afterClosed().pipe().toPromise().then(data => {
      if (data) {
        this.incomeService.deleteIncome(id).then(() => {
          this.incomeService.getIncomes(this.selectIndex);
        });
      }
    });

  }

  openUpdateModal(income): void {
    const modalRef = this.dialog.open(IncomesUpdateModalComponent, {width: '50%'});
    modalRef.componentInstance.income = income;
    modalRef.afterClosed().pipe().toPromise().then(data => {
      if (data) {
        this.incomeService.getIncomes(this.selectIndex);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
