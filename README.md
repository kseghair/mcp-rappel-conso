# Projet d'Exposition de Serveur MCP avec NestJS et Greeting Tool

Ce projet est une application NestJS conçue pour exposer un service (comme un serveur MCP) sur internet. Il intègre un "Greeting Tool" personnalisé, le tout dans un environnement conteneurisé avec Docker et exposé publiquement via Ngrok.

## ✨ Fonctionnalités

-   **Exposition de Serveur MCP** : La configuration est prête pour exposer un serveur MCP via un tunnel applicatif sécurisé.
-   **Greeting Tool Personnalisé** : Inclut un `greeting.tool.ts` comme exemple de fonctionnalité métier et d'interaction.
-   **Framework NestJS** : L'application est bâtie sur un framework Node.js moderne, scalable et performant.
-   **Environnement Dockerisé** : L'ensemble est conteneurisé avec Docker et orchestré par Docker Compose pour une portabilité maximale.
-   **Intégration Ngrok** : Un service `ngrok` est inclus pour exposer instantanément et de manière sécurisée l'API locale sur internet.
-   **Build Docker Multi-Stage** : Le `Dockerfile` est optimisé pour la production, créant une image finale légère.
-   **Gestion des Secrets** : Utilisation d'un fichier `.env` pour gérer les clés d'API en toute sécurité.
-   **Workflow de Développement Complet** : Le projet est configuré avec Git, un `.gitignore` et un `.dockerignore`.

## 🚀 Démarrage Rapide

### Prérequis

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)
-   Un compte [Ngrok](https://ngrok.com/) et son authtoken.

### Étapes d'installation

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/kseghair/test-mcp-nestjs.git
    cd test-mcp-nestjs
    ```

2.  **Configurez Ngrok :**
    Créez un fichier `.env` à la racine du projet et ajoutez-y votre token d'authentification Ngrok :
    ```
    NGROK_AUTHTOKEN=VOTRE_TOKEN_ICI
    ```

3.  **Lancez les services :**
    ```bash
    docker-compose up --build -d
    ```

4.  **Accédez à votre application :**
    -   Votre API est accessible localement sur `http://localhost:3000`.
    -   L'interface web de Ngrok est sur `http://localhost:4040`.
    -   Votre **URL publique** est visible dans l'interface Ngrok.

### Arrêter les services

```bash
docker-compose down
```

## 🛠️ Technologies utilisées

-   [NestJS](https://nestjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Docker](https://www.docker.com/)
-   [Ngrok](https://ngrok.com/)