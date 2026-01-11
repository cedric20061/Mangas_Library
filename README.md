# Manga Library Project

Ce projet est une application web conçue pour aider les utilisateurs à apprendre les bases de **SQLite** à travers une bibliothèque de mangas. Les utilisateurs peuvent consulter la liste des mangas, leurs résumés et autres informations pertinentes.  
Le projet utilise **HTML et Tailwind CSS** pour le frontend, et **Express.js avec SQLite** pour le backend.

---

## 🚀 Fonctionnalités

- Afficher une liste de mangas.
- Voir le résumé et les détails de chaque manga.
- Apprendre à utiliser SQLite dans un projet pratique.

---

## 🗂️ Structure du projet

Le projet est divisé en deux dossiers principaux :

1. **frontend** : contient le code HTML et Tailwind CSS.
2. **backend** : contient l’application Express.js et la gestion de la base de données SQLite.

---

## ⚙️ Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- SQLite

---

## 🛠️ Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/cedric20061/Mangas_Library
````

2. Se rendre dans le dossier du projet :

```bash
cd Mangas_Library
```

3. Installer le backend :

```bash
cd backend
npm install
```

4. Configurer le fichier `.env` :

* Renommer `.env.exemple` en `.env`
* Définir le `PORT` pour l’application

---

## ▶️ Lancer le projet

1. Démarrer le serveur backend :

```bash
cd backend
nodemon
```

Le serveur tourne par défaut sur `http://localhost:5000`.

2. Ouvrir le frontend :

* Ouvrir directement les fichiers HTML dans un navigateur.

---

## 🖼️ Aperçu de l’application

### 📚 Liste des mangas

![Liste des mangas](frontend/assets/preview-4.png)

<!-- ### 📖 Détails & résumé d’un manga -->

<!-- [Détails manga](frontend/assets/preview-2.png) -->

### 🎨 Accueil (Tailwind CSS)

![UI preview](front-end/assets/preview-1.png)
![UI preview1](front-end/assets/preview-2.png)
![UI preview2](front-end/assets/preview-3.png)


---

## 📂 Structure des fichiers

```
├── frontend
│   ├── index.html
│   ├── styles.css
│   └── assets/
│       ├── preview-home.png
│       ├── preview-details.png
│       └── preview-ui.png
├── backend
│   ├── main.js
│   ├── database/
│   └── ...
```

---

## 🔮 Améliorations futures

* Ajouter l’authentification des utilisateurs pour une expérience personnalisée.
* Étendre les détails des mangas avec les notes et avis.
* Ajouter une fonctionnalité de recherche et de filtrage.

---

## 📜 License

Ce projet est sous licence [MIT License](LICENSE).

---

## 🙏 Remerciements

* Merci aux créateurs de **Express.js**, **SQLite** et **Tailwind CSS** pour leurs outils incroyables.
* Inspiré par diverses bibliothèques de mangas en ligne et tutoriels.
