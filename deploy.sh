#!/bin/bash

# Satvik Foods Next.js Application Deployment Script
# For AWS EC2 Instance

echo "🚀 Starting deployment of Satvik Foods application..."

# Stop any existing containers
echo "📦 Stopping existing containers..."
docker-compose down

# Remove old images to free up space
echo "🧹 Cleaning up old Docker images..."
docker system prune -f

# Build and start the application
echo "🔨 Building and starting the application..."
docker-compose up --build -d

# Wait for the application to start
echo "⏳ Waiting for application to start..."
sleep 10

# Check if the application is running
echo "🔍 Checking application status..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application deployed successfully!"
    echo "🌐 Application is running on http://localhost:3000"
else
    echo "❌ Application failed to start. Checking logs..."
    docker-compose logs
    exit 1
fi

echo "📊 Container status:"
docker-compose ps

echo "🎉 Deployment completed!" 