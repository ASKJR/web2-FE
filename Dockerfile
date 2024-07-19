# Build environment
FROM node:20.14.0-alpine as build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy all project files
COPY . .

# Build the Angular project
RUN ng build --configuration production

# Production environment
FROM nginx:1.16.0-alpine

# Base system dependencies
RUN apk add --no-cache \
  curl \
  git \
  bash \
  nano

# Update SSL and other dependencies
RUN apk upgrade libssl1.0 --update-cache
RUN apk add wget ca-certificates

# Copy build artifacts from the build stage
COPY --from=build /app/dist/web2-FE/browser /usr/share/nginx/html

# Remove default Nginx config and add custom configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]