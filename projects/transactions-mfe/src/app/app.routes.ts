import { Routes } from '@angular/router';
import { App } from './app';
import { Transactions } from './pages/transactions/transactions';

export const routes: Routes = [
     {
        path:'',
        component:Transactions
    }
];
