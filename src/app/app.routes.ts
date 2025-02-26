import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { LoginComponent } from './login/login.component';
import { CasosMainComponent } from './casos/casos-main/casos-main.component'; 
import { AddCasoComponent } from './casos/add-caso/add-caso.component';




export const routes: Routes = [
    { path: 'usuarios', component: UsersMainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'casos', component: CasosMainComponent },
    { path: 'casos/addcaso', component: AddCasoComponent },
    { path: '', redirectTo: 'casos', pathMatch: 'full' },



];
