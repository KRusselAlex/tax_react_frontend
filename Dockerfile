# Étape 1 : Construire l'application React
FROM node:latest AS build

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Servir avec un serveur web léger (nginx)
FROM nginx:alpine

# Copier les fichiers de build vers nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
