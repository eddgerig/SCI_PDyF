import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersMainComponent } from './users-main/users-main.component';



export const routes: Routes = [
    { path: 'usuarios', component: UsersMainComponent },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },


];
