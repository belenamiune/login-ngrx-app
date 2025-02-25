import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('../app/pages/login/login.component').then(m => m.LoginComponent) 
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../app/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];