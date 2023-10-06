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
AGUACLARA/
  ├── README.md - This file
  ├── node_modules/
  ├── package.json
  ├── prisma 
  │   └── schema.prisma - Prisma ORM config and schemas
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── About/ - About page
  │   ├── api - Api routes
  │   │   ├── submitReporteAgua/ - Submit report endpoint
  │   │   └── ...
  │   ├── components/ - App components
  │   │   ├── FormularioReporte.js - Form componenet
  │   │   ├── Navbar.js - Navbar componenet
  │   │   └── ...
  │   ├── home/ - Conjunto vacio home page
  │   │   ├── Home.js
  │   │   ├── About.js
  │   │   ├── Contact.js
  │   │   └── ...
  │   ├── reporte/ - Reporte and map page
  │   │   ├── Page.js
  │   │   └── ...
  │   ├── page.js / - Root page
  │   ├── layout.js
  │   └── ...
  └── ...