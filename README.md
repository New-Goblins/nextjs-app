# Hello World Node.js Application

A simple containerized Node.js Hello World application with automated semantic versioning and container registry publishing.

## Features

- 🚀 Simple HTTP server responding with "Hello World!"
- 🐳 Dockerized application
- 🔄 Automated semantic versioning using semantic-release
- 📦 Automated container image publishing to GitHub Container Registry (and optionally Docker Hub)
- 🏗️ Multi-platform Docker builds (amd64, arm64)

## Prerequisites

- Node.js 18 or higher
- Docker (for containerization)
- Git

## Local Development

### Running with Node.js

```bash
# Install dependencies
npm install

# Start the application
npm start
```

The server will start on `http://localhost:3000`

### Running with Docker

```bash
# Build the Docker image
docker build -t hello-world-nodejs .

# Run the container
docker run -p 3000:3000 hello-world-nodejs
```

Visit `http://localhost:3000` to see "Hello World!"

## CI/CD Pipeline

This project uses GitHub Actions for automated releases and container publishing.

### Workflow Overview

1. **Semantic Release**: Automatically determines version numbers based on commit messages
2. **Build & Push**: Builds multi-platform Docker images and pushes to container registries

### Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features (triggers minor version bump)
- `fix:` - Bug fixes (triggers patch version bump)
- `docs:` - Documentation changes (triggers patch version bump)
- `chore:` - Maintenance tasks (no version bump)
- `BREAKING CHANGE:` - Breaking changes (triggers major version bump)

**Examples:**
```
feat: add health check endpoint
fix: resolve port binding issue
docs: update README with deployment instructions
```

### Setup Instructions

#### GitHub Container Registry (Automatic)

The workflow automatically publishes to GitHub Container Registry (ghcr.io) using the `GITHUB_TOKEN`. No additional setup required!

#### Docker Hub (Optional)

To publish to Docker Hub, add these secrets to your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

### Pulling the Image

```bash
# From GitHub Container Registry
docker pull ghcr.io/YOUR_USERNAME/YOUR_REPO:latest

# From Docker Hub (if configured)
docker pull YOUR_DOCKERHUB_USERNAME/hello-world-nodejs:latest
```

## Project Structure

```
.
├── index.js                 # Main application file
├── package.json            # Node.js dependencies and scripts
├── Dockerfile              # Docker container configuration
├── .dockerignore          # Files to exclude from Docker builds
├── .releaserc.json        # Semantic release configuration
├── .github/
│   └── workflows/
│       └── release.yml    # CI/CD workflow
└── README.md              # This file
```

## Environment Variables

- `PORT`: Server port (default: 3000)

## License

MIT