import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/auth/login/login';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';
import { Dashboard } from './features/dashboard/dashboard';
import { FormularioDeRegistro } from './features/auth/formulario-de-registro/formulario-de-registro';
import { RegistrarProductosComponent } from './features/dashboard/registrar-producto/registrar-producto';
import { BuscarProductoComponent } from './features/dashboard/buscar-producto/buscar-producto';
import { RegistrarSalidaComponent } from './features/dashboard/registrar-salida/registrar-salida';
import { FormularioProducto } from './features/dashboard/formulario-producto/formulario-producto';


export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'quienes-somos', component: QuienesSomos },
    { path: 'dashboard', component: Dashboard },
    { path: 'formulario-de-registro', component: FormularioDeRegistro },
    { path: 'registrar-producto', component: RegistrarProductosComponent },
    { path: 'buscar-producto', component: BuscarProductoComponent },
    { path: 'registrar-salida', component: RegistrarSalidaComponent },
    { path: 'formulario-producto', component: FormularioProducto },
    { path: 'formulario-producto/:id', component: FormularioProducto },
    { path: '**', redirectTo: '' }
];
