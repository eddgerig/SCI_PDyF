import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestPageComponent } from './test-page/test-page.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'test', component: TestPageComponent }

];
