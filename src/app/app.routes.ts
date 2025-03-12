import { Routes } from '@angular/router';
import { AuthGuard } from '@app/auth/guards/auth.guard';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent)
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./books/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		loadComponent: () => import('./shell/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
	}
];
