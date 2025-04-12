# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Angular project files to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the Angular application using a lightweight web server
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx HTML folder
COPY --from=build /app/dist/* /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 4200

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
