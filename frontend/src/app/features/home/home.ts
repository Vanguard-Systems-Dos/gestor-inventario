import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../shared/css/button.css', '../../shared/css/card.css',
    '../../shared/css/hero.css', '../../shared/css/input.css',
    '../../shared/css/text.css']
})
export class Home {

  // Datos para los casos de uso
  useCases = [
    {
      image: '/img/files_search.svg',
      alt: 'Administración',
      title: 'Administración',
      description: 'Visualiza métricas clave. Toda la operación en la palma de tu mano.'
    },
    {
      image: '/img/stock_box.svg',
      alt: 'Stock',
      title: 'Stock',
      description: 'Registra movimientos, consulta el inventario y minimiza errores manuales.'
    },
    {
      image: '/img/graph.svg',
      alt: 'Análisis',
      title: 'Análisis',
      description: 'Accede a informacion de manera simple y toma decisiones estratégicas basadas en datos confiables.'
    }
  ];

  // Datos para el carrusel de características
  features = [
    [
      {
        image: '/img/tutorial.svg',
        alt: 'Guía experta',
        title: 'Guía Experta',
        description: 'Implementación asistida para una puesta en marcha rápida y sin complicaciones.'
      },
      {
        image: '/img/settings.svg',
        alt: 'Rápida configuración',
        title: 'Configuración Rápida',
        description: 'En pocos pasos, tu sistema listo para operar con total seguridad y eficiencia.'
      },
      {
        image: '/img/analyst_team.svg',
        alt: 'Analítica avanzada',
        title: 'Analítica Avanzada',
        description: 'Visualiza información y toma decisiones basadas en datos concretos y actualizados.'
      }
    ],
    [
      {
        image: '/img/easy.svg',
        alt: 'Integración fluida',
        title: 'Fácil entendimiento',
        description: 'Una herramienta fácil de usar, con una interfaz sencilla pero intuitiva.'
      },
      {
        image: '/img/users_done.svg',
        alt: 'Control por roles',
        title: 'Control por Roles',
        description: 'Gestioná los permisos de acceso según el perfil del usuario en tu organización.'
      },
      {
        image: '/img/solution.svg',
        alt: 'Solución Personalizable',
        title: 'Solución Personalizable',
        description: 'Adaptamos el sistema a tus necesidades particulares. No es solo un software, es tu herramienta.'
      }
    ],
    [
      {
        image: '/img/suport.svg',
        alt: 'Soporte 24/7',
        title: 'Soporte 24/7',
        description: 'Estamos siempre disponibles para ayudarte. Asistencia técnica cuando la necesites, sin interrupciones.'
      },
      {
        image: '/img/sistem.svg',
        alt: 'Automatización inteligente',
        title: 'Automatización',
        description: 'Reduce errores y ahorra tiempo con procesos automatizados sobre tareas diarias repetitivas.'
      }
    ]
  ];

  // Logica para carrucel
  currentIndex = 0;
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.features.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.features.length) % this.features.length;
  }
  ngOnInit() {
    setInterval(() => this.next(), 5000);
  }



}

//NgbModule