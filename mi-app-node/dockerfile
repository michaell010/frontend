# Imagen base oficial de Node
FROM node:20

# Crear directorio dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]