import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';

interface LinkHeader {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  rutaActual: string = '';
  mostrarHeader: boolean = true;
  logoUrl: string = '';

  private routerSubscription!: Subscription;

  links: LinkHeader[] = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Sobre Vanguard' },
    { path: '/login', label: 'Iniciar sesión' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.rutaActual = this.router.url;
    this.verificarMostrarHeader();
    this.verificarRutaImagen();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.rutaActual = event.urlAfterRedirects || event.url;
        this.verificarMostrarHeader();
      });
  }

  private verificarMostrarHeader(): void {
      // Oculta el header en la ruta de login
      this.mostrarHeader = this.rutaActual !== '/login';
    }

  private verificarRutaImagen(): void {
    // Ruta relativa desde el componente
    this.logoUrl = '/img/Logo_Vanguard-Stock.jpg';
  }


  shouldShowLink(linkPath: string): boolean {
    return this.rutaActual !== linkPath;
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}