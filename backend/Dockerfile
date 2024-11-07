# Étape 1 : Utiliser l'image de base Node.js
FROM node:14

# Étape 2 : Créer et définir le dossier de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste du code de l'application
COPY . .

# Étape 6 : Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Étape 7 : Démarrer l'application
CMD ["node", "app.js"]
