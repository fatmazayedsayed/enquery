import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { SubmitEnquery } from './pages/submit-enquery/submit-enquery';
import { EnqueryList } from './pages/enquery-list/enquery-list';
import { EnqueryCategory } from './pages/enquery-category/enquery-category';
import { EnqueryStatus } from './pages/enquery-status/enquery-status';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [

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
        path: 'login',
        component: Login
    },
    {
        path: 'submit-enquery',
        component: SubmitEnquery
    },
    {
        path: 'enquery-list',
        component: EnqueryList
    },
    {
        path: 'enquery-category',
        component: EnqueryCategory
    },
    {
        path: 'enquery-status',
        component: EnqueryStatus
    },
    {
        path: 'dashboard',
        component: Dashboard
    }

];

