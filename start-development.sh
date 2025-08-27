#!/bin/bash
# Development startup script for Unix/Linux environments

echo "🚀 Starting application in development mode..."

# Set environment variables
export NODE_ENV=development

# Start the development server
echo "🔧 Starting development server with hot reload..."
tsx server/index.ts