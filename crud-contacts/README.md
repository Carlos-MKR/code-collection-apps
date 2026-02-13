# 🚀 Laravel + Vue + Inertia CRUD

Demo de un CRUD moderno desarrollado con Laravel 12, Inertia.js y Vue 3.

<p align="center">
  <a href="https://youtu.be/HRC0Hd9npWI" target="_blank">
    <img src="https://img.shields.io/badge/▶%20Ver%20Demo%20en%20YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
  </a>
</p>



Funcionalidades incluidas:
- ✅ Crear contactos
- ✅ Editar contactos
- ✅ Eliminar contactos
- ✅ Subida y actualización de imágenes
- ✅ Validación backend
- ✅ Login y Registro de usuarios

#####  🛠 Stack Tecnológico

- Laravel 12
- Inertia.js
- Vue 3
- TailwindCSS
- Vite
- MySQL


1️⃣ Clonar repositorio
```bash
git clone https://github.com/Carlos-MKR/code-collection-apps
cd code-collection-apps/crud-contacts
```

2️⃣ Instalar dependencias
```bash
composer install
npm install
```

3️⃣ Configurar entorno
```bash
Crear copia del .env.example y renombrarlo a .env

Configura tu base de datos en el archivo .env.
```

4️⃣ Generar key
```bash
php artisan key:generate
```
5️⃣ Migrar base de datos
```bash
php artisan migrate
```
6️⃣ Crear enlace simbólico para imágenes
```bash
php artisan storage:link
```
7️⃣ Ejecutar proyecto
```bash
php artisan serve
npm run dev
```