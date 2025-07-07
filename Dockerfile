##############################################
# Stage 1 – Build the app
##############################################
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application for production
RUN npm run build

##############################################
# Stage 2 – Serve the app with Nginx
##############################################
FROM nginx:alpine AS runner

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 