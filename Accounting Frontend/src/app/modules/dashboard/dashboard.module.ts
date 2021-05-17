import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './pages/home/home.component';
import {ExpensesComponent} from './pages/expenses/expenses.component';
import {DashboardRouting} from './dashboard.routing';
import {UserInfoComponent} from './pages/home/components/user-info/user-info.component';
import {NavigationAreaComponent} from './pages/home/components/navigation-area/navigation-area.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {IncomesComponent} from './pages/incomes/incomes.component';
import {InvoiceCardComponent} from './pages/invoices/components/invoice-card/invoice-card.component';
import {ChartGraphicsComponent} from './components/chart-graphics/chart-graphics.component';
import {ExpensesCreateModalComponent} from './pages/expenses/components/expenses-create-modal/expenses-create-modal.component';
import {IncomesCreateModalComponent} from './pages/incomes/components/incomes-create-modal/incomes-create-modal.component';
import {ExpensesUpdateModalComponent} from './pages/expenses/components/expenses-update-modal/expenses-update-modal.component';
import {IncomesUpdateModalComponent} from './pages/incomes/components/incomes-update-modal/incomes-update-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExpensesComponent,
    UserInfoComponent,
    NavigationAreaComponent,
    InvoicesComponent,
    IncomesComponent,
    InvoiceCardComponent,
    ChartGraphicsComponent,
    ExpensesCreateModalComponent,
    IncomesCreateModalComponent,
    ExpensesUpdateModalComponent,
    IncomesUpdateModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule
  ]
})
export class DashboardModule {
}
