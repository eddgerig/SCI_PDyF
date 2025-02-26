import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { LoginComponent } from './login/login.component';
import { CasosMainComponent } from './casos/casos-main/casos-main.component'; 
import { AddCasoComponent } from './casos/add-caso/add-caso.component';
import { EntidadesMainComponent } from './entidades/entidades-main/entidades-main.component';
import { FormEntidadComponent } from './entidades/form-entidad/form-entidad.component';
import { AddEntidadComponent } from './entidades/add-entidad/add-entidad.component';



export const routes: Routes = [
    { path: 'usuarios', component: UsersMainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'casos', component: CasosMainComponent },
    { path: 'casos/addcaso', component: AddCasoComponent },
    { path: 'entidades', component: EntidadesMainComponent },
    { path: 'add-entidad', component: AddEntidadComponent },
    { path: 'form-entidad', component: FormEntidadComponent },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },



];
