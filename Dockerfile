# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install packages needed for healthchecks and runtime diagnostics
RUN apk add --no-cache curl

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build && npm prune --omit=dev

# Expose port (Coolify will handle port mapping)
EXPOSE 5000

# Set production environment
ENV NODE_ENV=production
ENV PORT=5000

# Start the application
CMD ["node", "dist/index.js"]