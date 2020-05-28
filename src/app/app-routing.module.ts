import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { GuardloginGuard } from './shared/guard/guardlogin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: 'login', component: LoginComponent, canActivate: [GuardloginGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
