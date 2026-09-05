# TASK MANAGER REACT
 
A fullstack task management application built with React (Vite) on the frontend and Express (TypeScript) on the backend.
It supports full CRUD operations, user authentication, filtering, pagination, and is fully documented with Swagger and tested with Vitest and Jest.
 
<!-- BADGE_CI -->
 
## 🚀 Instalación local
 
```bash
git clone git@github.com:alvaradoramosjose/task-manager-react.git
cd task-manager-react
npm install
```
 
### Variables de entorno
Crea un archivo `.env` en la raíz con las siguientes claves (sin valores reales en este documento):
 
```
DATABASE_URL=
JWT_SECRET=
PORT=
```
 
## 📜 Comandos disponibles
 
| Comando          | Descripción                              |
|------------------|-------------------------------------------|
| `npm run dev`    | Levanta el entorno de desarrollo           |
| `npm run build`  | Genera el build de producción              |
| `npm test`       | Corre las pruebas automatizadas (pendiente — Sesión 3) |
 
## 🗄️ Base de datos
 
PostgreSQL con migraciones y seeds gestionados con Prisma (ver Módulo 2).
