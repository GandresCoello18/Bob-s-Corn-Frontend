![Baner](https://www.baselabs.mx/images/logo-with-icon.png)

# Bob's Corn Frontend

Interfaz web desarrollada con Vue 3 y TypeScript que permite a los usuarios interactuar con la API de Bob's Corn. Esta aplicación frontend consume los endpoints del backend para realizar compras de maíz, visualizar el historial de transacciones y recibir feedback en tiempo real sobre el estado de las operaciones, incluyendo notificaciones cuando se excede el rate limiting.

## Propósito

Este proyecto frontend actúa como la capa de presentación del sistema Bob's Corn, proporcionando una interfaz de usuario intuitiva y responsiva que se comunica con la [API REST del backend](https://github.com/GandresCoello18/Bob-s-Corn-API/tree/master). Permite a los usuarios realizar compras, consultar su historial y recibir retroalimentación inmediata sobre sus acciones, incluyendo manejo de errores y limitaciones de tasa de solicitudes.

<img width="1916" height="918" alt="Captura de pantalla 2025-12-15 203602" src="https://github.com/user-attachments/assets/09697b51-f3d3-455a-8a2d-2b8fbb1d4633" />

## Arquitectura

El frontend sigue una arquitectura modular y escalable:

- **Vue Router**: Gestión de rutas y navegación SPA
- **Service Layer**: Capa de servicios que abstrae las llamadas a la API
- **Componentes Vue**: Componentes reutilizables y organizados
- **TypeScript**: Type safety en toda la aplicación

## Stack Tecnológico

- **Framework**: Vue 3 (Composition API)
- **Lenguaje**: TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: Vue Router 4
- **Linting**: ESLint con plugins para Vue y TypeScript
- **Formato**: Prettier
- **Deployment**: Vercel

## Requisitos Previos

- Node.js >= 18.0.0
- npm o yarn
- Git

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd frontend
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

**Nota**: Si no creas el archivo `.env`, por defecto usará `http://localhost:3000`. Esta variable se usa para el proxy en desarrollo y puede ser sobrescrita en producción según tu configuración de despliegue.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts Disponibles

### Desarrollo

- `npm run dev` o `yarn dev` - Inicia el servidor de desarrollo con hot-reload
- `npm run preview` o `yarn preview` - Previsualiza la build de producción localmente

### Build

- `npm run build` o `yarn build` - Compila el proyecto para producción (incluye verificación de tipos TypeScript)

### Linting y Formato

- `npm run lint` o `yarn lint` - Ejecuta ESLint y corrige automáticamente los problemas encontrados
- `npm run format` o `yarn format` - Formatea el código con Prettier

### Git Hooks

- `npm run prepare` o `yarn prepare` - Configura Husky para git hooks
- `npm run commitlint` o `yarn commitlint` - Valida mensajes de commit (ejecutado automáticamente por Husky)

## Estructura del Proyecto

```
src/
├── App.vue              # Componente raíz de la aplicación
├── main.ts              # Punto de entrada de la aplicación
├── style.css            # Estilos globales con Tailwind CSS
├── vite-env.d.ts        # Definiciones de tipos de Vite
├── router/
│   └── index.ts         # Configuración de Vue Router
├── services/
│   └── api.ts           # Capa de servicios para comunicación con la API
└── views/
    ├── Home.vue         # Vista principal (compras y historial)
    └── NotFound.vue     # Vista 404 personalizada
```

## Integración con el Backend

El frontend se comunica con la API del backend a través de la capa de servicios (`src/services/api.ts`). Los endpoints consumidos son:

- `POST /api/v001/purchases` - Realizar una compra de maíz
- `GET /api/v001/purchases` - Obtener historial de compras con paginación

### Configuración de la API

Por defecto, el frontend usa rutas relativas (`/api/v001`), lo que permite que funcione con un proxy en desarrollo o con rutas absolutas en producción. Para desarrollo local, puedes configurar un proxy en `vite.config.ts` o usar variables de entorno.

## Características

- ✅ Interfaz para realizar compras de maíz
- ✅ Visualización del historial de compras con paginación
- ✅ Feedback en tiempo real sobre el estado de las operaciones
- ✅ Manejo de errores y notificaciones de rate limiting
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Type safety con TypeScript
- ✅ Routing con Vue Router (incluye página 404)
- ✅ Arquitectura limpia con capa de servicios

## Despliegue en Vercel

Este proyecto está configurado para ser desplegado en Vercel. Para desplegar:

### Conectar repositorio en Vercel

1. Conecta tu repositorio de GitHub/GitLab/Bitbucket en Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. Configura las variables de entorno si es necesario
4. Deploy automático en cada push


### Configuración Recomendada en Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build` o `yarn build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` o `yarn install`

### Variables de Entorno en Vercel

Si necesitas apuntar a un backend específico, configura la siguiente variable de entorno en Vercel:

```
VITE_API_BASE_URL=https://tu-backend-url.com
```

**Importante**: Si usas rewrites en `vercel.json` para redirigir las peticiones `/api` al backend, no necesitas configurar esta variable ya que el proxy manejará las peticiones internamente.


## Desarrollo

### Hot Module Replacement (HMR)

Vite proporciona HMR instantáneo, por lo que los cambios en los componentes Vue se reflejan inmediatamente sin recargar la página.

### TypeScript

El proyecto usa TypeScript estricto. Los tipos están definidos en:
- Interfaces en `src/services/api.ts` para las respuestas de la API
- Tipos de Vue Router en `src/router/index.ts`

### Estilos con Tailwind CSS

Los estilos se escriben usando clases de utilidad de Tailwind. El archivo `src/style.css` contiene las directivas de Tailwind y estilos globales personalizados.

## Autores ✒️

- **Andrés Coello Goyes** - _SOFTWARE ENGINEER_ - [Andres Coello](https://linktr.ee/gandrescoello)

#### 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://andres-coello-goyes.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrescoellogoyes/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/acoellogoyes)

## Expresiones de Gratitud 🎁

- Pasate por mi perfil para ver algun otro proyecto 📢
- Desarrollemos alguna app juntos, puedes escribirme en mis redes.
- Muchas gracias por pasarte por este proyecto 🤓.

---

⌨️ con ❤️ por [Andres Coello Goyes](https://linktr.ee/gandrescoello) 😊

<img width="400" height="400" alt="1764558900283" src="https://github.com/user-attachments/assets/cde88968-7856-49ec-bdb1-53a82bf9caa3" />
