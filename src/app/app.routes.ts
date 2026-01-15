import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SubmitEnquery } from './pages/submit-enquery/submit-enquery';
import { EnqueryList } from './pages/enquery-list/enquery-list';
import { EnqueryCategory } from './pages/enquery-category/enquery-category';
import { EnqueryStatus } from './pages/enquery-status/enquery-status';
import { AuthGuard } from './services/auth-Guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: Login },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home

    },

    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard]
    },
    {
        path: 'submit-enquery',
        component: SubmitEnquery,
        canActivate: [AuthGuard]

    },
    {
        path: 'enquery-list',
        component: EnqueryList,
        canActivate: [AuthGuard]
    },
    {
        path: 'enquery-category',
        component: EnqueryCategory,
        canActivate: [AuthGuard]
    },
    {
        path: 'enquery-status',
        component: EnqueryStatus,
        canActivate: [AuthGuard]
    },

];

