import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit, OnDestroy {
  rutaActual: string = '';
  mostrarFooter: boolean = true;
  private routerSubscription!: Subscription;

  // Enlaces del footer
  enlacesRapidos = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Sobre Vanguard' },
    { path: '/features', label: 'Funcionalidades' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.rutaActual = this.router.url;
    this.verificarMostrarFooter();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.rutaActual = event.urlAfterRedirects || event.url;
        this.verificarMostrarFooter();
      });
  }

  private verificarMostrarFooter(): void {
    // Oculta el footer en la ruta de login (puedes agregar más rutas si necesitas)
    const rutasSinFooter = ['/login', '/registro'];
    this.mostrarFooter = !rutasSinFooter.includes(this.rutaActual);
  }

  // Método para navegar suavemente al top
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Método para verificar si un enlace es la ruta actual
  esRutaActual(path: string): boolean {
    return this.rutaActual === path;
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}