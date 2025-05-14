# 👥 Users CRUD App

Una aplicación web para gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Construida con HTML, CSS y JavaScript modular utilizando Vite como bundler para un desarrollo moderno. Usa `json-server` como backend simulado para almacenar los datos.

---

## 📝 Descripción

Esta aplicación permite realizar todas las operaciones básicas sobre un conjunto de usuarios, con una interfaz interactiva y funcional. Incluye paginación, manejo de formularios en modales, interacción asincrónica con el backend simulado (`json-server`) y un enfoque limpio con separación de responsabilidades.

El código está organizado siguiendo buenas prácticas: módulos independientes, presentación desacoplada, mapeo de datos, lógica de casos de uso clara y uso de variables de entorno mediante `.env`.

Ideal para practicar arquitectura en JavaScript, asincronía con `fetch`, manejo del DOM y creación de interfaces limpias.

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Carlos-MKR/code-collection-apps
cd code-collection-apps/crud-users-app
```
### 2. Instalar dependencias

```bash
npm install
```
### 3. Iniciar el servidor de usuarios (json-server)
#### 🧠 Atajo útil con script de NPM

Para evitar escribir el comando completo de `json-server`, puedes usar este script ya definido en el `package.json`:

```json
"scripts": {
  "server": "json-server server/db.json --port 3001"
}
```
Ahora puedes iniciar el servidor con solo ejecutar:
```bash
npm run server
```
Asegúrate de tener el archivo server/db.json con una estructura como esta:
```json
{
  "users": [
    {
        "id": 1,
        "isActive": false,
        "balance": 1397.32,
        "first_name": "Ryan",
        "last_name": "Kent",
    }
  ]
}
```

### 3. Iniciar en modo desarrollo
Ejecuta en otra terminal
```bash
npm run dev
```

### Nota: Variables de entorno
No olvides configurar las variables de entorno en el archivo `.env`

