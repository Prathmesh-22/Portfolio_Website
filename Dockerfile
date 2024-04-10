# Use the Nginx image from Docker Hub as the base image
FROM nginx:alpine

# Remove the default Nginx index.html file
RUN rm /usr/share/nginx/html/*

# Copy the website files into the Nginx server
COPY . /usr/share/nginx/html

# Expose port 80 to the host so we can access the container
EXPOSE 80

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]
