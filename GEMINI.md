# Guide de Collaboration avec Gemini

Ce document sert de guide pour l'assistant IA Gemini afin d'assurer une collaboration efficace et cohérente sur ce projet.

## 1. Introduction et Objectif du Projet

*   **Description du projet** : Serveur NestJS utilisant les données de la plateforme ouverte [data.gouv.fr](https://data.gouv.fr).
*   **Objectifs principaux** : Fournir des "tools" pour récupérer des données de data.gouv.fr (spécifiquement `RappelConso`) et les envoyer à un client.

## 2. Conventions et Stack Technique

*   **Stack principale** :
    *   **Framework** : NestJS (`v11+`)
    *   **Langage** : TypeScript
    *   **Conteneurisation** : Docker
    *   **Tunneling** : Ngrok
*   **Style de code** :
    *   **Linter** : ESLint. La configuration est dans `eslint.config.mjs`.
    *   **Formateur** : Prettier. Utiliser la commande `npm run format`.
*   **Conventions de nommage** :
    *   **Fichiers** : `*.type.ts` (ex: `rappelconso.tool.ts`).
    *   **Variables & Fonctions** : `camelCase`.
    *   **Classes & Interfaces** : `PascalCase`.
*   **Patterns d'architecture** :
    *   Suivre la structure modulaire standard de NestJS (Module, Controller, Service).
    *   Utiliser les DTOs (Data Transfer Objects) pour la validation et la structuration des données des requêtes/réponses.
    *   La logique métier doit résider dans les fichiers `*.service.ts` ou `*.tool.ts`.

## 3. Workflow et Commandes Clés

Utilisez les commandes suivantes pour les tâches courantes :

*   **Installer les dépendances** (si non utilisé avec Docker) :
    ```bash
    npm install
    ```
*   **Lancer l'application en local** :
    ```bash
    npm run start:dev
    ```
*   **Lancer avec Docker & Ngrok** :
    ```bash
    docker-compose up --build -d
    ```
*   **Arrêter les services Docker** :
    ```bash
    docker-compose down
    ```
*   **Lancer le linter et corriger les erreurs** :
    ```bash
    npm run lint
    ```
*   **Formater le code** :
    ```bash
    npm run format
    ```
*   **Lancer les tests unitaires** :
    ```bash
    npm run test
    ```
*   **Lancer les tests End-to-End (E2E)** :
    ```bash
    npm run test:e2e
    ```
*   **Créer un build de production** :
    ```bash
    npm run build
    ```

## 4. Instructions Spécifiques pour Gemini

*   **Tâches courantes** :
    *   "Ajoute la gestion des erreurs pour les appels API dans `rappelconso.tool.ts`."
    *   "Améliore le `RappelConsoTool` pour permettre de filtrer les rappels par marque."

*   **À faire (Do's)** :
    *   ✅ Toujours lancer `npm run lint` et `npm run test` après avoir modifié du code.
    *   ✅ Suivre rigoureusement les conventions de nommage et d'architecture.
    *   ✅ Demander une clarification si une instruction est ambiguë.
    *   ✅ Proposer un plan avant d'effectuer des changements complexes.

*   **À ne pas faire (Don'ts)** :
    *   ❌ Ne jamais installer une nouvelle dépendance (`npm install <package>`) sans une autorisation explicite.
    *   ❌ Ne pas désactiver les règles du linter.
    *   ❌ Ne pas introduire de nouveaux patterns d'architecture sans discussion préalable.
