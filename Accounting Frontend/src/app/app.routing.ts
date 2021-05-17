import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {AuthGuard} from './layouts/authentication/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./layouts/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRouting {
}
