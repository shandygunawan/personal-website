# Stage 1: The "Builder"
# -------------------------------------
# We use a specific Node.js version on a lightweight Alpine Linux base.
# 'AS builder' names this stage so we can reference it later.
FROM node:16-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first.
# This leverages Docker's layer caching. If these files don't change,
# Docker won't re-run 'npm install' on subsequent builds.
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the Vue project for production. This will create the /app/dist folder.
RUN npm run build


# Stage 2: The "Server"
# -------------------------------------
# Now, we use a very small Nginx image.
FROM nginx:stable-alpine

# Copy the build output (the 'dist' folder) from the 'builder' stage
# into the default Nginx public HTML directory.
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration to the container.
# This will overwrite the default Nginx config.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80. Nginx listens on this port by default inside the container.
# We will map our host port (3000) to this container port when we run it.
EXPOSE 80

# The command to start the Nginx server in the foreground.
CMD ["nginx", "-g", "daemon off;"]