import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { AuthGuard } from './auth-guard.service';
import { TwainComponent } from './twain/twain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'twain',
    loadChildren: 'app/twain/twain.module#TwainModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(
  appRoutes, { enableTracing: false, preloadingStrategy: SelectivePreloadingStrategy });
