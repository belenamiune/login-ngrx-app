import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './books/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shell/components/page-not-found/page-not-found.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', component: PageNotFoundComponent }
];
