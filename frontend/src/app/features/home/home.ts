import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../shared/css/button.css', '../../shared/css/card.css',
  '../../shared/css/hero.css', '../../shared/css/input.css',
  '../../shared/css/text.css']
})
export class Home implements AfterViewInit, OnDestroy {
  private carousel: any;

  // Datos para los casos de uso
  useCases = [
    {
      image: 'assets/images/files_search.svg',
      alt: 'Administración',
      title: 'Administración',
      description: 'Visualiza métricas clave. Toda la operación en la palma de tu mano.'
    },
    {
      image: 'assets/images/stock_box.svg',
      alt: 'Stock',
      title: 'Stock',
      description: 'Registra movimientos, consulta el inventario y minimiza errores manuales.'
    },
    {
      image: 'assets/images/graph.svg',
      alt: 'Análisis',
      title: 'Análisis',
      description: 'Accede a informacion de manera simple y toma decisiones estratégicas basadas en datos confiables.'
    }
  ];

  // Datos para el carrusel de características
  features = [
    [
      {
        image: 'assets/images/tutorial.svg',
        alt: 'Guía experta',
        title: 'Guía Experta',
        description: 'Implementación asistida para una puesta en marcha rápida y sin complicaciones.'
      },
      {
        image: 'assets/images/settings.svg',
        alt: 'Rápida configuración',
        title: 'Configuración Rápida',
        description: 'En pocos pasos, tu sistema listo para operar con total seguridad y eficiencia.'
      },
      {
        image: 'assets/images/analyst_team.svg',
        alt: 'Analítica avanzada',
        title: 'Analítica Avanzada',
        description: 'Visualiza información y toma decisiones basadas en datos concretos y actualizados.'
      }
    ],
    [
      {
        image: 'assets/images/easy.svg',
        alt: 'Integración fluida',
        title: 'Fácil entendimiento',
        description: 'Una herramienta fácil de usar, con una interfaz sencilla pero intuitiva.'
      },
      {
        image: 'assets/images/users_done.svg',
        alt: 'Control por roles',
        title: 'Control por Roles',
        description: 'Gestioná los permisos de acceso según el perfil del usuario en tu organización.'
      },
      {
        image: 'assets/images/solution.svg',
        alt: 'Solución Personalizable',
        title: 'Solución Personalizable',
        description: 'Adaptamos el sistema a tus necesidades particulares. No es solo un software, es tu herramienta.'
      }
    ],
    [
      {
        image: 'assets/images/suport.svg',
        alt: 'Soporte 24/7',
        title: 'Soporte 24/7',
        description: 'Estamos siempre disponibles para ayudarte. Asistencia técnica cuando la necesites, sin interrupciones.'
      },
      {
        image: 'assets/images/sistem.svg',
        alt: 'Automatización inteligente',
        title: 'Automatización',
        description: 'Reduce errores y ahorra tiempo con procesos automatizados sobre tareas diarias repetitivas.'
      }
    ]
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const carouselElement = this.elementRef.nativeElement.querySelector('#featuresCarousel');
      if (carouselElement && typeof bootstrap !== 'undefined') {
        this.carousel = new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel'
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.carousel) {
      this.carousel.dispose();
    }
  }

  // Método para trackear por índice en ngFor
  trackByIndex(index: number, item: any): number {
    return index;
  }
}