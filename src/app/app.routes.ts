import { Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

export const routes: Routes = [
    { path: 'admin-home', component: AdminHomeComponent }, 
    { path: 'user-home', component: UserHomeComponent },
  { path: 'login', component: LoginComponent} 
];
