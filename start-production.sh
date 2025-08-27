#!/bin/bash
# Production startup script for Unix/Linux environments

echo "🚀 Starting application in production mode..."

# Set environment variables
export NODE_ENV=production

# Build the application
echo "📦 Building application..."
npm run build

# Start the application
echo "🌟 Starting production server..."
node dist/index.js