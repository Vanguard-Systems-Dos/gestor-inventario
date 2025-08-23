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
- 🔜 Sprint 4: SPA fullstack con Angular + API REST en Django (login/registro con lógica de negocio y CRUD conectado al backend)  

---

## 🧠 Tecnologías previstas

| Frontend | Backend | Base de Datos | Herramientas |
|----------|---------|---------------|--------------|
| HTML5, CSS3, Typescript, Bootstrap 5.3, Angular v.20 | Python 3.x con Django | PostgreSQL | Git, GitHub, Mural |

---

## 📁 Estructura del proyecto

```bash
gestor-inventario/
├── backend/
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── dashboard.css
│   │   │   │   │   ├── dashboard.html
│   │   │   │   │   ├── dashboard.spec.ts
│   │   │   │   │   └── dashboard.ts
│   │   │   │   ├── formulario-de-registro/
│   │   │   │   │   ├── formulario-de-registro.css
│   │   │   │   │   ├── formulario-de-registro.html
│   │   │   │   │   ├── formulario-de-registro.spec.ts
│   │   │   │   │   └── formulario-de-registro.ts
│   │   │   │   ├── home/
│   │   │   │   │   ├── home.css
│   │   │   │   │   ├── home.html
│   │   │   │   │   ├── home.spec.ts
│   │   │   │   │   └── home.ts
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.css
│   │   │   │   │   ├── login.html
│   │   │   │   │   ├── login.spec.ts
│   │   │   │   │   └── login.ts
│   │   │   │   ├── quienes-somos/
│   │   │   │   │   ├── quienes-somos.css
│   │   │   │   │   ├── quienes-somos.html
│   │   │   │   │   ├── quienes-somos.spec.ts
│   │   │   │   │   └── quienes-somos.ts
│   │   │   ├── img/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   ├── shared/
│   │   │   └── app.config.server.ts
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── maqueta/
│   ├── bootstrap-5.3.6/
│   ├── css/
│   ├── images/
│   ├── portfolio/
│   ├── home.html
│   ├── login.html
│   ├── dashboard.html
│   ├── buscar-producto.html
│   ├── formulario-de-registro.html
│   ├── quienes-somos.html
│   ├── registrar-producto.html
│   ├── registrar-salida.html
│   └── readme.md
└── README.md

```

## 🤝 Nuestro equipo

|Participantes|Correo electrónico|Perfil|
|:---:|:---:|:---:|
|**Aldo Alejandro Minoldo**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:minoldoaldo@gmail.com)|[![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AAMinoldo)|
|**Nicolas Federico Minoldo**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:minoldonico@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NicolasMinoldo)|
|**Patricio Esteban Rodriguez**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](Mailto:rpatricioesteban@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1PatoRod)|
|**Carlos Maximiliano Scarpatti Vazquez**|[![Correo](https://img.shields.io/badge/correo-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maxi.scarpatti@gmail.com)| [![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MaxiScarpatti)|

## 🚀 Próximos pasos

- Completar la maquetación responsive
- Validar las vistas con los usuarios simulados
- Iniciar el desarrollo funcional con JavaScript
- Implementar conexión con el backend y base de datos

¡Gracias por visitar nuestro repositorio!  
No dudes en seguir el proyecto o contribuir con sugerencias y mejoras. 🙌

</div>

---

> 📌 Repositorio principal del proyecto: [Gestor de Inventarios](https://github.com/Vanguard-Systems-Dos/gestor-inventario) 
