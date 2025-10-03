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

- ✅ Sprint 1: documentación y diseño general del sistema  
- 🛠️ Sprint 2 (en curso): maquetado con HTML5, CSS y Bootstrap  
- 🔜 Sprint 3: SPA estática en Angular (landing, registro/login, dashboard, CRUD y "quiénes somos") con routing y formularios reactivos  
- 🔜 Sprint 4: SPA fullstack con Angular. Implementación de Servicios que consumen APIs de prueba para los Get. No se aceptan datos en duro o hardcodeados.   
 Diseño de Base de Datos: Diseño de base de datos: Conceptual (DER), Lógico (Modelo Relacional) y Físico. Entregar además el script de la base de datos.


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
│
├── frontend/
│   ├── node_modules/
│   │
│   ├── public/
│   │   ├── img/
│   │   ├── portfolio/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── dashboard.css
│   │   │   │   │   ├── dashboard.html
│   │   │   │   │   ├── dashboard.spec.ts
│   │   │   │   │   └── dashboard.ts
│   │   │   │   │
│   │   │   │   ├── formulario-de-registro/
│   │   │   │   │   ├── formulario-de-registro.css
│   │   │   │   │   ├── formulario-de-registro.html
│   │   │   │   │   ├── formulario-de-registro.spec.ts
│   │   │   │   │   └── formulario-de-registro.ts
│   │   │   │   │
│   │   │   │   ├── home/
│   │   │   │   │   ├── home.css
│   │   │   │   │   ├── home.html
│   │   │   │   │   ├── home.spec.ts
│   │   │   │   │   └── home.ts
│   │   │   │   │
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.css
│   │   │   │   │   ├── login.html
│   │   │   │   │   ├── login.spec.ts
│   │   │   │   │   └── login.ts
│   │   │   │   │
│   │   │   │   └── quienes-somos/
│   │   │   │       ├── quienes-somos.css
│   │   │   │       ├── quienes-somos.html
│   │   │   │       ├── quienes-somos.spec.ts
│   │   │   │       └── quienes-somos.ts
│   │   │   │
│   │   │   ├── img/
│   │   │   ├── models/
│   │   │   │   ├── producto.ts
│   │   │   │   ├── productos.ts
│   │   │   │   ├── prueba.ts
│   │   │   │   └── unidad-medida.ts
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── producto.service.ts
│   │   │   │   ├── producto.service.spec.ts
│   │   │   │   ├── prueba.service.ts
│   │   │   │   ├── prueba.service.spec.ts
│   │   │   │   ├── unidad-medida.service.ts
│   │   │   │   └── unidad-medida.service.spec.ts
│   │   │   │
│   │   │   └── shared/
│   │   │
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.spec.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── server.ts
│   │   ├── styles.css
│   │   └── tsconfig.app.json
│   │
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── README.md
│
├── maqueta/
│   └── bootstrap-5.3.6/
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

## 🚀 Próximos pasos

El objetivo es evolucionar la aplicación hacia una **App SPA Fullstack** con frontend en Angular y backend en Django (arquitectura limpia).  

### 🔹 Funcionalidades a implementar
- **Mejoras en Páginas**:
  - Home (Landing Page)
  - Registro e Inicio de Sesión
  - Dashboard
  - Gestión de Contenido (CRUD de productos, categorías, proveedores)
  - Quiénes Somos

- **Backend (Django + DRF)**:
  - Implementar API Rest siguiendo principios de **arquitectura limpia**.  
  - Endpoints para registro, login (JWT), y manejo de sesiones.  
  - Endpoints CRUD para productos, categorías, proveedores y movimientos de stock.  
  - Validaciones y manejo de errores.  

- **Frontend (Angular)**:
  - Conexión a la API Rest mediante **servicios**.  
  - Reemplazo de datos mockeados (`db.json`) por consumo de API real.  
  - Integración de formularios con validaciones para registro, login y CRUD.  

### 🔹 Infraestructura
- Configuración de **Docker** para levantar frontend + backend + base de datos (PostgreSQL).  
- Despliegue inicial en **Vercel (frontend)** y **Railway / Render / DockerHub (backend y DB)**.  

### 🔹 QA / Testing
- Pruebas unitarias en Angular (`.spec.ts`).  
- Pruebas unitarias y de integración en Django (pytest / unittest).  
- Postman Collection para probar endpoints de la API.  

### 🔹 Documentación
- Actualizar la wiki con endpoints de la API (contratos).  
- Guía de despliegue local y en la nube.  
- Explicación de arquitectura del backend y conexión con el frontend.  


¡Gracias por visitar nuestro repositorio!  
No dudes en seguir el proyecto o contribuir con sugerencias y mejoras. 🙌

</div>

---

> 📌 Repositorio principal del proyecto: [Gestor de Inventarios](https://github.com/Vanguard-Systems-Dos/gestor-inventario) 
