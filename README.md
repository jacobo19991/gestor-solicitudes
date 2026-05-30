# Gestor de Solicitudes 🎫☁️

![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)

Plataforma web Full Stack desarrollada con **Next.js** y **TypeScript** para la gestión ágil de tickets de soporte, permisos y requerimientos internos.

## ☁️ Enfoque Cloud & Arquitectura

Como parte del desarrollo hacia un perfil DevOps/Cloud, este proyecto incorpora:
- **Arquitectura Serverless-Ready:** Diseñado para aprovechar la escalabilidad automática mediante Edge Functions o Serverless (ideal para Vercel, AWS Lambda, Cloudflare Pages).
- **Containerización Optimizada:** Configuración Docker para despliegues independientes en cualquier orquestador (Kubernetes, AWS ECS, Google Cloud Run).
- **Componentización (React):** Separación estricta de responsabilidades en la UI.
- **Tipado Estricto (TypeScript):** Reducción de errores en tiempo de ejecución, ideal para entornos de producción de alta fiabilidad.

## 🚀 Funcionalidades Actuales
- Interfaz moderna e intuitiva con navegación eficiente.
- Pantallas funcionales de Login, Registro y Dashboard de Solicitudes.
- Arquitectura de tres capas (Frontend, Lógica, Backend simulado).

## 🐳 Despliegue con Docker (Cloud / Producción)

El proyecto incluye un `Dockerfile` configurado para transpilar TypeScript y optimizar los assets estáticos de Next.js.

```bash
# 1. Construir la imagen de producción
docker build -t gestor-solicitudes .

# 2. Levantar el contenedor en el puerto 3000
docker run -p 3000:3000 -d --name app-solicitudes gestor-solicitudes
```

## 🛠️ Desarrollo Local

Si deseas correr la aplicación sin contenedores:

1. Instala las dependencias:
```bash
npm install
```

2. Levanta el entorno de desarrollo:
```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## 📋 Mejoras Futuras
- Conexión a Base de Datos (PostgreSQL vía Prisma o Supabase).
- Implementación de flujos de CI/CD (GitHub Actions).
- Sistema de roles (Admin/Usuario) usando JWT o NextAuth.