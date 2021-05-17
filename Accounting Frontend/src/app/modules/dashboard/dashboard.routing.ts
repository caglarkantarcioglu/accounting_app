import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ExpensesComponent} from './pages/expenses/expenses.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {IncomesComponent} from './pages/incomes/incomes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'incomes', component: IncomesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRouting {
}
