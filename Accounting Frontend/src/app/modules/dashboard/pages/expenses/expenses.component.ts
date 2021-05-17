import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {ExpensesCreateModalComponent} from './components/expenses-create-modal/expenses-create-modal.component';
import {ExpenseService} from '../../services/expense.service';
import {Subscription} from 'rxjs';
import {GraphicService} from '../../services/graphic.service';
import {InvoiceService} from '../../services/invoice.service';
import {DeleteConfirmComponent} from '../../../../shared/components/delete-confirm/delete-confirm.component';
import {ExpensesUpdateModalComponent} from './components/expenses-update-modal/expenses-update-modal.component';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [ExpenseService, GraphicService]
})

export class ExpensesComponent implements OnInit, OnDestroy {
  expenses = new MatTableDataSource([]);
  date = new Date();
  subscription: Subscription;
  displayedColumns: string[] = ['title', 'content', 'price', 'date', 'invoice', 'update', 'delete'];
  grahpOpen: boolean;
  selectIndex = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public expenseService: ExpenseService,
    private graphicService: GraphicService,
    public invoiceService: InvoiceService
  ) {
    this.subscription = this.expenseService.expenses.subscribe(expenses => {
      this.expenses.data = expenses;
      this.expenses.paginator = this.paginator;
    });
  }

  openGraphic(): void {
    this.graphicService.getGraphicData('/expense', this.date.getFullYear());
    this.grahpOpen = true;
  }

  openCreateModal(): void {
    const modalRef = this.dialog.open(ExpensesCreateModalComponent, {
      width: '50%',
    });
    modalRef.afterClosed().pipe().toPromise().then(data => {
      if (data) {
        this.expenseService.getExpenses(this.selectIndex);
      }
    });
  }

  openUpdateModal(expense): void {
    const modalRef = this.dialog.open(ExpensesUpdateModalComponent, {width: '50%'});
    modalRef.componentInstance.expense = expense;
    modalRef.afterClosed().pipe().toPromise().then(data => {
      if (data) {
        this.expenseService.getExpenses(this.selectIndex);
      }
    });
  }

  openInvoice(id): void {
    this.invoiceService.openInvoicePDF(id);
  }

  ngOnInit(): void {
    this.expenseService.getExpenses(this.selectIndex);
  }

  deleteExpense(id): void {
    const deleteConfirm = this.dialog.open(DeleteConfirmComponent, {
      width: '30%',
    });
    deleteConfirm.afterClosed().pipe().toPromise().then(data => {
      if (data) {
        this.expenseService.deleteExpense(id).then(() => {
          this.expenseService.getExpenses(this.selectIndex);
        });
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
