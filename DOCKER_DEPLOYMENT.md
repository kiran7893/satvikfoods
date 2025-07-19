# Docker Deployment Guide for Satvik Foods

This guide will help you deploy the Satvik Foods Next.js application on AWS EC2 using Docker.

## Prerequisites

- AWS EC2 instance running Ubuntu/Debian
- Docker and Docker Compose installed
- Port 3000 open in your security group

## Installation Steps

### 1. Install Docker on EC2

```bash
# Update package list
sudo apt-get update

# Install required packages
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add current user to docker group
sudo usermod -aG docker $USER

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. Clone and Deploy Application

```bash
# Clone your repository (replace with your actual repo URL)
git clone <your-repository-url>
cd satvikfoods

# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 3. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the Docker image
docker-compose build

# Start the application
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## Configuration

### Environment Variables

Create a `.env` file in your project root if needed:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Port Configuration

The application runs on port 3000 by default. To change this:

1. Update `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:3000"
```

2. Update your EC2 security group to allow the new port.

## Management Commands

### View Logs
```bash
docker-compose logs -f
```

### Stop Application
```bash
docker-compose down
```

### Restart Application
```bash
docker-compose restart
```

### Update Application
```bash
# Pull latest changes
git pull

# Rebuild and restart
./deploy.sh
```

### Check Container Status
```bash
docker-compose ps
docker stats
```

## Troubleshooting

### Application Not Starting
```bash
# Check logs
docker-compose logs

# Check container status
docker-compose ps

# Restart containers
docker-compose restart
```

### Port Already in Use
```bash
# Check what's using port 3000
sudo netstat -tulpn | grep :3000

# Kill the process if needed
sudo kill -9 <PID>
```

### Docker Issues
```bash
# Restart Docker service
sudo systemctl restart docker

# Clean up Docker
docker system prune -a
```

## Security Considerations

1. **Firewall**: Ensure only necessary ports are open in your EC2 security group
2. **HTTPS**: Consider setting up a reverse proxy (nginx) with SSL certificates
3. **Updates**: Regularly update Docker and your application
4. **Monitoring**: Set up monitoring and alerting for your application

## Production Recommendations

1. **Use a Reverse Proxy**: Set up nginx or Apache as a reverse proxy
2. **SSL/TLS**: Configure HTTPS using Let's Encrypt or AWS Certificate Manager
3. **Load Balancer**: Use AWS Application Load Balancer for high availability
4. **Monitoring**: Set up CloudWatch monitoring and logging
5. **Backup**: Implement regular backups of your application data

## Example Nginx Configuration

If you want to use nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Support

For issues or questions:
1. Check the application logs: `docker-compose logs`
2. Verify Docker installation: `docker --version`
3. Check system resources: `docker stats`
4. Review this deployment guide

---

**Note**: This deployment guide assumes you're using Ubuntu/Debian on your EC2 instance. Adjust commands accordingly for other distributions. 