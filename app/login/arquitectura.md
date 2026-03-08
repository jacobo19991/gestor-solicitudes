# Arquitectura de 3 Capas

```mermaid
graph TD
    subgraph Capa_Cliente [Frontend]
        A[Next.js App] --> B[Interfaz de Usuario]
    end

    subgraph Capa_Logica [Backend Serverless]
        B --> C{API Routes}
        C --> D[Lógica del Gestor]
    end

    subgraph Capa_Datos [Persistencia]
        D --> E[(Base de Datos)]
    end