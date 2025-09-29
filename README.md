# API Base con Node.js y Express

Este proyecto es el punto de partida para la construcción de una API RESTful. Contiene un servidor web básico creado con Node.js y el framework Express, exponiendo un endpoint de estado para verificar que el servicio está activo.

## ✨ Características Actuales
* **Servidor Express.js:** Configuración básica de un servidor web.
* **Endpoint de Estado (`/status`):** Permite verificar la salud y disponibilidad de la API.
* **Base Escalable:** El código está estructurado para ser fácilmente extendido con nuevas funcionalidades.

## 🛠️ Stack Tecnológico
* **Backend:** Node.js
* **Framework:** Express.js
* **Gestor de Paquetes:** npm

---
## 🚀 Cómo Empezar

### 1. Prerrequisitos
* Node.js y npm instalados.

### 2. Configuración Local
1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/cTapiaDev/mi-api-inteligente-m2g2.git](https://github.com/cTapiaDev/mi-api-inteligente-m2g2.git)
    cd mi-api-inteligente-m2g2
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta la aplicación:**
    ```bash
    npm start
    ```
    El servidor se iniciará en `http://localhost:3000`.

---
## Endpoints de la API

### `GET /status`
Verifica el estado de la API. Devuelve un objeto JSON que confirma que el servicio está operativo.

* **Comando de Ejemplo (`curl`):**
    ```bash
    curl http://localhost:3000/status
    ```
* **Respuesta Exitosa (200 OK):**
    ```json
    {
      "status": "ok",
      "timestamp": "2025-09-29T04:30:00.000Z"
    }
    ```

---
## 📈 Próximos Pasos (Evolución del Proyecto)

Este proyecto base está diseñado para ser el fundamento del taller de "Flujos Inteligentes". Los siguientes pasos para completarlo serían:
- [ ] **Integrar la API de OpenAI** para crear un endpoint `/chat` interactivo.
- [ ] **Añadir pruebas automatizadas** con un framework como Jest.
- [ ] **Configurar un pipeline de CI/CD** con GitHub Actions para automatizar las pruebas y el despliegue.

## 📜 Licencia
Este proyecto se distribuye bajo la Licencia MIT.

