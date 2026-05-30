# --- Etapa 1: Dependencias ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Etapa 2: Construcción (Build) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Configuración para optimizar construcción en entornos Cloud
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# --- Etapa 3: Producción ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Solo copiamos los artefactos compilados para tener una imagen final muy ligera
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]