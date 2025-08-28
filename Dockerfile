# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (Coolify will handle port mapping)
EXPOSE 5000

# Set production environment
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/index.js"]