import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { authGuard } from './core/auth.guard';
import { loadRemoteModule } from '@angular-architects/native-federation-v4';

export const routes: Routes = [

     // Public
  {
    path: 'login',
    component: Login
  },

  {
    path:'',
    component:Layout,
    canActivate:[authGuard],
    children:[
        {
          path:'dashboard',
          loadChildren: ()=> loadRemoteModule('dashboard-mfe','./routes').then(m=>m.routes)
        },
        {
          path:'transactions',
          loadChildren: ()=> loadRemoteModule('transactions-mfe','./routes').then(m=>m.routes)
        },
        {
          path:'profile',
          loadChildren: ()=> loadRemoteModule('profile-mfe','./routes').then(m=>m.routes)
        }
    ]
  }
  
];
