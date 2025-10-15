# 👨‍💻👩‍💻 Vanguard Systems – Proyecto 2025 ISPC  
## Gestor de Inventario interno

¡Bienvenidos al repositorio de nuestro proyecto colaborativo!

Somos estudiantes de 2° año de la **Tecnicatura Superior en Desarrollo de Software** del **ISPC**, y a lo largo de este ciclo lectivo desarrollaremos un **Gestor de Inventarios Web** como proyecto integrador final. Actualmente estamos cerrando el tercer sprint, enfocados en la **etapa de maquetado en Angular de interfaces**.

![Esquema del sistema](https://media.licdn.com/dms/image/v2/D4E12AQFjgF1zpKkfNA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1702434135345?e=1750896000&v=beta&t=DC9Ec1eil4inftPHcNT3P-CXhWR1fEY_j20u2Tryn8o)
---

## 📦 ¿Qué es el Gestor de Inventarios?

Se trata de una aplicación web diseñada para facilitar el control de inventarios dentro de una empresa o institución. El sistema permitirá:

- ➕ Agregar, editar y eliminar productos  
- 📦 Controlar el stock en tiempo real  
- ⚠️ Recibir alertas por bajo nivel de inventario  
- 📊 Visualizar historial de movimientos  
- 👥 Asignar distintos roles de usuario (administrador y usuarios)

Este proyecto se desarrolla aplicando metodologías ágiles y buenas prácticas de programación.

---

## 🛠️ Estado del proyecto

🛠️ Estado del Proyecto
✅ Sprint 1
Documentación y diseño general del sistema.
✅ Sprint 2
Maquetado con HTML5, CSS y Bootstrap.
✅ Sprint 3
SPA estática en Angular con landing page, registro/login, dashboard, CRUD y sección "quiénes somos". Implementación de routing y formularios reactivos.
✅ Sprint 4
SPA fullstack con Angular. Implementación de Servicios que consumen APIs de prueba para los GET. Diseño de Base de Datos completo (Conceptual, Lógico y Físico) con script incluido.
✅ Sprint 5
App SPA fullstack funcional con conexión a API REST Django utilizando arquitectura limpia. Incluye:
HOME (Landing Page)
Registro e Inicio de Sesión
Dashboard
Gestión de Contenido (CRUD)
Quiénes Somos
Implementación completa de lógica de autenticación y flujo de trabajo.

---

## 🧠 Tecnologías previstas

| Frontend | Backend | Base de Datos | Herramientas |
|----------|---------|---------------|--------------|
| HTML5, CSS3, Typescript, Bootstrap 5.3, Angular v.20 | Python 3.x con Django | PostgreSQL | Git, GitHub, Mural |

---

# 📂 Estructura del proyecto

```bash
gestor-inventario/
├── backend/
│   ├── gestor_de_inventarios/  # Configuración principal del proyecto (Django)
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── productos/            # Aplicación para la gestión de productos
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py         # Definiciones del modelo Producto, etc.
│   │   ├── tests.py
│   │   ├── urls.py           # Endpoints de la API para productos
│   │   └── views.py          # Lógica de la API (vistas)
│   ├── usuarios/             # Aplicación para gestión de usuarios y autenticación
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── movimientos/          # Aplicación para registrar movimientos de inventario
│   │   ├── migrations/
│   │   └── ...
│   ├── proveedores/          # Aplicación para gestión de proveedores
│   │   ├── migrations/
│   │   └── ...
│   ├── db.sqlite3            # Base de datos local (puede variar)
│   ├── manage.py             # Herramienta de línea de comandos de Django
│   └── requirements.txt      # Dependencias de Python
│
├── frontend/                 # Proyecto Angular
│   ├── node_modules/
│   ├── public/
│   │   ├── img/
│   │   ├── portfolio/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   ├── dashboard/
│   │   │   │   └── login/
│   │   │   │
│   │   │   ├── models/       # Interfaces y modelos de TypeScript
│   │   │   │   ├── producto.ts
│   │   │   │   └── unidad-medida.ts
│   │   │   │
│   │   │   ├── services/     # Servicios para interactuar con el backend
│   │   │   │   ├── producto.service.ts
│   │   │   │   └── unidad-medida.service.ts
│   │   │   │
│   │   │   └── shared/
│   │   │
│   │   ├── app.config.ts
│   │   ├── main.ts
│   │   └── styles.css
│   │
│   ├── angular.json
│   ├── package.json
│   └── README.md
│
├── maqueta/
│   └── bootstrap-5.3.6/
│
└── db.json


```

## 🤝 Nuestro equipo

|Participantes|Correo electrónico|Perfil|
|:---:|:---:|:---:|
|**Aldo Alejandro Minoldo**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:minoldoaldo@gmail.com)|[![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AAMinoldo)|
|**Nicolas Federico Minoldo**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:minoldonico@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NicolasMinoldo)|
|**Patricio Esteban Rodriguez**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](Mailto:rpatricioesteban@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1PatoRod)|
|**Carlos Maximiliano Scarpatti Vazquez**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maxi.scarpatti@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MaxiScarpatti)|

## 🚀 Próximos pasos

El objetivo es evolucionar la aplicación hacia una **App SPA Fullstack** con frontend en Angular y backend en Django (arquitectura limpia).  

### 🔹 Funcionalidades a implementar

## 🚀 Próximos Pasos (Foco: Despliegue de Producción)

El objetivo actual es el despliegue final en Render, aprovechando la base de datos PostgreSQL ya configurada.

### 🔹 Fase 1: Backend (Django)

- Ajustar `settings.py` para producción y configurar la conexión a la DB de Render.
- Crear el servicio Web Service en Render y ejecutar migraciones.
- Desplegar la API y verificar la accesibilidad de todos los endpoints.

### 🔹 Fase 2: Frontend (Angular)

- Actualizar todas las URLs de la API por la URL de producción de Render.
- Realizar el build final y desplegar la SPA.
- Ejecutar pruebas End-to-End para validar el flujo completo.

## 🛠️ Tareas de Estabilidad y Futuras Implementaciones

### 🔹 Tareas de Estabilidad (Inmediatas)

- Implementar Pruebas Unitarias/Integración (Python/TS).
- Refinar la documentación de los endpoints.
- Refactorización de código para arquitectura limpia.

### 🔹 Funcionalidades Post-MVP (Excluidas de la versión actual)

- **Usuarios Avanzados:** Recuperación de contraseña, Gestión de perfiles y Gestión de usuarios (Admin).
- **Métricas:** Dashboard con indicadores clave (stock bajo, frecuencia de reposición).
- **Seguridad y Alcance:** Autenticación avanzada (JWT), Soporte multilingüe, e Integración con sistemas de terceros.

### 🔹 Documentación
- Actualizar la wiki con endpoints de la API (contratos).  
- Guía de despliegue local y en la nube.  
- Explicación de arquitectura del backend y conexión con el frontend.  


¡Gracias por visitar nuestro repositorio!  
No dudes en seguir el proyecto o contribuir con sugerencias y mejoras. 🙌

</div>

---

> 📌 Repositorio principal del proyecto: [Gestor de Inventarios](https://github.com/Vanguard-Systems-Dos/gestor-inventario) 
