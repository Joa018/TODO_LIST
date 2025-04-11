<img src="https://elevarequity.com/wp-content/uploads/2020/07/TICMAS-LOGO.png" alt="Ticmas" width="200" height="120"/> 

# TO-DO list 

<p align="center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width="100"/>
  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="100"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width="100"/>
</p>

Aplicación fullstack para gestión de tareas. Desarrollada con NestJS (backend), PostgreSQL (base de datos), TypeORM (ORM) y React con Next.js (frontend). Permite crear, editar, eliminar y marcar tareas como completadas.

## Backend (NestJS)
- NestJS
- TypeORM
- PostgreSQL
- pgAdmin4


## Frontend (Next.js)
- React
- Next.js
- Tailwind CSS

## Dependencias:

### Backend Instalá esto en el directorio backend-to-do-list:

`npm install @nestjs/core @nestjs/common @nestjs/platform-express`

`npm install @nestjs/typeorm typeorm pg`

### Frontend Instalá estas dependencias en la carpeta frontend-to-do-list:
      
`npm install axios@^1.8.4 next@15.2.5 react@^19.0.0 react-dom@^19.0.0`

`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`

### Conecciones a la DB
1. Docker: `docker-compose up -d`
2. PostgrastSQL(pgAdmin4): ir al app.module.ts y copiar los datos de la db

