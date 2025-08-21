import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';
import { Dashboard } from './features/dashboard/dashboard';
import { FormularioDeRegistro } from './features/formulario-de-registro/formulario-de-registro';



export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'quienes-somos', component: QuienesSomos },
    { path: 'dashboard', component: Dashboard },
    { path: 'formulario-de-registro', component:  FormularioDeRegistro},
    { path: '**', redirectTo: '' }
];
