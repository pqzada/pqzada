FROM node:18.6.0-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY ./package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 5173
CMD ["npm", "run", "start"]