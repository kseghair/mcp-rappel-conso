# MCP Server Exposure Project with NestJS and Greeting Tool

This project is a NestJS application designed to expose a service (like an MCP server) to the internet. It features a custom "Greeting Tool", all within a containerized environment using Docker and publicly exposed via Ngrok.

## ✨ Features

-   **MCP Server Exposure**: The configuration is ready to expose an MCP server through a secure application tunnel.
-   **Custom Greeting Tool**: Includes a `greeting.tool.ts` as an example of a custom business feature and interaction.
-   **NestJS Framework**: The application is built on a modern, scalable, and high-performance Node.js framework.
-   **Dockerized Environment**: The entire setup is containerized with Docker and orchestrated by Docker Compose for maximum portability.
-   **Ngrok Integration**: An `ngrok` service is included to instantly and securely expose the local API to the internet.
-   **Multi-Stage Docker Build**: The `Dockerfile` is optimized for production, creating a lightweight final image.
-   **Secrets Management**: Uses a `.env` file to securely manage API keys (like the Ngrok authtoken).
-   **Complete Development Workflow**: The project is configured with Git, a `.gitignore`, and a `.dockerignore`.

## 🚀 Getting Started

### Prerequisites

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)
-   An [Ngrok](https://ngrok.com/) account and its authtoken.

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kseghair/test-mcp-nestjs.git
    cd test-mcp-nestjs
    ```

2.  **Configure Ngrok:**
    Create a `.env` file in the project root and add your Ngrok authentication token:
    ```
    NGROK_AUTHTOKEN=YOUR_TOKEN_HERE
    ```

3.  **Launch the services:**
    Use Docker Compose to build the images and start the containers in the background.
    ```bash
    docker-compose up --build -d
    ```

4.  **Access your application:**
    -   Your API is accessible locally at `http://localhost:3000`.
    -   The Ngrok web interface is at `http://localhost:4040`.
    -   Your **public URL** is visible in the Ngrok interface.

### Stopping the services

To stop all containers, run:
```bash
docker-compose down
```

## 🛠️ Tech Stack

-   [NestJS](https://nestjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Docker](https://www.docker.com/)
-   [Ngrok](https://ngrok.com/)
