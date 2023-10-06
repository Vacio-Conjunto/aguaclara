# Proyecto Agua Clara - by Conjunto Vacío

## Instrucciones para correr el proyecto

Para inicializar el proyecto de desarrollo local sigue los siguientes pasos:

1. Dirigete a la carpeta del proyecto
2. Ejecuta los siguientes comandos en la terminal
```bash
npm i --force
npx prisma generate
npm run dev
```
3. Inizialza un servicio de mysql local y actualiza las credenciales del mismo en el archivo prisma.schema
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Estructura de carpetas
- AGUACLARA/
  - README.md - Este archivo
  - node_modules/
  - package.json
  - prisma/
    - schema.prisma - Configuración y esquemas de Prisma ORM
  - public/
    - index.html
    - favicon.ico
  - src/
    - About/ - Página "Acerca de"
    - api/ - Rutas de la API
      - submitReporteAgua/ - Punto de envío de informes
      - ...
    - components/ - Componentes de la aplicación
      - FormularioReporte.js - Componente de formulario
      - Navbar.js - Componente de barra de navegación
      - ...
    - home/ - Página principal vacía
      - Home.js
      - About.js
      - Contact.js
      - ...
    - reporte/ - Página de informe y mapa
      - Page.js
      - ...
    - page.js - Página raíz
    - layout.js
    - ...
- ...
