# 1. Imagen base: El runtime de Node.js [cite: 1106, 1184]
FROM node:20-alpine

# 2. Directorio de trabajo: Aislamiento dentro del contenedor [cite: 1119]
WORKDIR /app

# 3. Instalación de dependencias: Usamos capas para eficiencia [cite: 1068, 1157]
COPY package*.json ./
RUN npm install

# 4. Copiar el código fuente: Portabilidad total [cite: 1142]
COPY . .

# 5. Puerto y ejecución: Modo desarrollo para tu proyecto actual [cite: 1156]
EXPOSE 3000
# Permite que Turbopack acepte conexiones desde tu localhost
ENV NEXT_TELEMETRY_DISABLED 1
ENV WATCHPACK_POLLING true
CMD ["npm", "run", "dev"]