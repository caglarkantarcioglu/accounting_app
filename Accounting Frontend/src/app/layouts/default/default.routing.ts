import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'user',
    component: DefaultComponent,
    loadChildren: () => import('../../modules/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRouting {
}
