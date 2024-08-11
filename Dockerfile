# Production environment
FROM nginx:1.16.0-alpine

# Copy pre-built Angular artifacts from the host machine
COPY dist/web2-FE/browser /usr/share/nginx/html

# Remove default Nginx config and add custom configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]