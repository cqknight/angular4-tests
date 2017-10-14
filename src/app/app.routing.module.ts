import { TwainComponent } from './twain/twain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: './twain',
    pathMatch: 'full'
  },
  {
    path: 'twain',
    loadChildren: 'app/twain/twain.module#TwainModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });
