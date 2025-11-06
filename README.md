# PAU-Profesor

Sistema de gestión de postulaciones para ayudantías universitarias desarrollado para la Universidad Santa María (USM) Valparaíso.

## Autores

- **Gonzalo Michea**
- **Maximiliano Miranda**

## Descripción

PAU-Profesor es una aplicación web que permite a los profesores gestionar las postulaciones de estudiantes para ayudantías de sus cursos. El sistema facilita la visualización, filtrado y selección de postulantes basándose en diversos criterios académicos.

### Características principales

- **Dashboard de Cursos**: Visualización de todos los cursos con información de postulantes
- **Gestión de Postulaciones**: Revisión detallada de cada postulante por curso
- **Filtros Avanzados**: 
  - Nota mínima en el curso
  - Ranking de preferencia del postulante
  - Ordenamiento por diferentes criterios
- **Control de Ayudantías**: Sistema que previene asignar más de 2 ayudantías por estudiante
- **Información Detallada**: Visualización completa del perfil de cada postulante y sus postulaciones

### Tecnologías utilizadas

- **React** - Framework principal
- **React Router** - Navegación entre páginas
- **Webpack** - Bundler y servidor de desarrollo
- **SCSS** - Estilos con metodología BEM

## Requisitos

- Node >= 16.13.1
- npm >= 8.1.2

## Instalación

Instalar dependencias:

```bash
npm install
```

## Uso

Iniciar servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5050

## Estructura del Proyecto

```
PAU-profesores/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ApplicantCard.js
│   │   ├── ApplicantDetail.js
│   │   ├── layout.jsx
│   │   └── nav_bar.jsx
│   ├── pages/              # Páginas principales
│   │   ├── home_page.jsx
│   │   └── CourseApplicants.jsx
│   ├── data/               # Datos mock
│   │   ├── courses.js
│   │   └── mockApplicants.js
│   ├── utils/              # Utilidades
│   │   └── semesterUtils.js
│   └── stylesheets/        # Estilos SCSS
└── webpack.config.js
```

## Funcionalidades

### Dashboard Principal
- Lista de cursos con información básica
- Contador de postulantes por curso
- Navegación rápida a la gestión de postulaciones

### Gestión de Postulaciones
- Visualización de todos los postulantes de un curso
- Filtrado por nota mínima en el curso
- Filtrado por ranking de preferencia
- Ordenamiento por nota o preferencia
- Selección y rechazo de postulantes
- Advertencias para postulantes con múltiples ayudantías

### Perfil de Postulante
- Información general del estudiante
- Lista completa de postulaciones
- Notas obtenidas en cada curso
- Ranking de preferencias del estudiante

## Paquetes Incluidos

- [Webpack](https://webpack.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Sass](https://sass-lang.com/)

## Metodología de Estilos

Los estilos fueron desarrollados utilizando la metodología [BEM](https://getbem.com/) (Block Element Modifier) para mantener una estructura clara y escalable.

## Licencia

Ver archivo [LICENSE](LICENSE) para más detalles.
