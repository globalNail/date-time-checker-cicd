# CI/CD Pipeline Documentation

This project uses GitHub Actions for continuous integration and deployment. The CI/CD pipeline is designed to ensure code quality, run tests, and deploy the application automatically.

## 🚀 Pipeline Overview

### Workflows

1. **`ci-cd.yml`** - Main CI/CD pipeline
2. **`security.yml`** - Security scanning and dependency auditing
3. **`pr-checks.yml`** - Pull request validation

## 📋 Pipeline Stages

### 1. Code Quality & Testing
- **ESLint** - Code linting for frontend
- **TypeScript** - Type checking
- **Unit Tests** - Backend API testing
- **Build Verification** - Ensures both frontend and backend build successfully

### 2. Security & Dependencies
- **npm audit** - Vulnerability scanning
- **Dependency Review** - PR dependency analysis
- **CodeQL Analysis** - Static code analysis

### 3. Integration Testing
- **API Testing** - End-to-end API validation
- **Health Checks** - Service availability testing

### 4. Deployment
- **Staging** - Automatic deployment on `develop` branch
- **Production** - Manual approval deployment on `main` branch

## 🛠️ Setup Instructions

### 1. Repository Setup
```bash
# Ensure your repository has the following branch structure
git checkout -b develop
git checkout main
```

### 2. GitHub Secrets (if needed for deployment)
Add the following secrets in your GitHub repository settings:

```
STAGING_SERVER_HOST=your-staging-server.com
STAGING_SERVER_USER=deploy-user
STAGING_SERVER_KEY=your-ssh-private-key

PRODUCTION_SERVER_HOST=your-production-server.com
PRODUCTION_SERVER_USER=deploy-user
PRODUCTION_SERVER_KEY=your-ssh-private-key
```

### 3. Environment Protection Rules
1. Go to Settings → Environments
2. Create `production` environment
3. Enable "Required reviewers"
4. Add deployment protection rules

## 🔄 Workflow Triggers

### Automatic Triggers
- **Push to `main`** → Full CI/CD + Production deployment
- **Push to `develop`** → Full CI/CD + Staging deployment
- **Pull Request** → Quality checks and testing
- **Schedule** → Weekly security audits

### Manual Triggers
- Production deployments require manual approval
- Security scans can be triggered manually

## 📊 Pipeline Steps Detail

### Backend Pipeline
```yaml
1. Checkout code
2. Setup Node.js 18
3. Install dependencies (npm ci)
4. Run tests
5. Build (if applicable)
```

### Frontend Pipeline
```yaml
1. Checkout code
2. Setup Node.js 18
3. Install dependencies (npm ci)
4. Run ESLint
5. Build production bundle
6. Upload build artifacts
```

### Integration Tests
```yaml
1. Start backend server
2. Run API endpoint tests
3. Validate responses
4. Clean up resources
```

## 🐳 Docker Deployment

The project includes Docker support for containerized deployment:

### Build Images
```bash
# Build all services
docker-compose build

# Build specific service
docker build -t datetime-checker-frontend ./frontend
docker build -t datetime-checker-backend ./backend
```

### Run Locally
```bash
# Start all services
docker-compose up -d

# Check service health
docker-compose ps
```

### Production Deployment
```bash
# Deploy to production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 🚨 Monitoring & Alerts

### Health Checks
- Backend: `GET /api/health`
- Frontend: HTTP 200 on root path
- Database connectivity (if applicable)

### Performance Monitoring
- Build time tracking
- Bundle size analysis
- Test execution time

## 🔧 Configuration Files

### GitHub Actions
- `.github/workflows/ci-cd.yml` - Main pipeline
- `.github/workflows/security.yml` - Security scanning
- `.github/workflows/pr-checks.yml` - PR validation

### Docker
- `frontend/Dockerfile` - Frontend container
- `backend/Dockerfile` - Backend container
- `docker-compose.yml` - Multi-service setup
- `frontend/nginx.conf` - Nginx configuration

### Testing
- `backend/test/api.test.js` - API integration tests

## 🎯 Best Practices

1. **Branch Protection**
   - Require PR reviews
   - Require status checks
   - No direct pushes to `main`

2. **Dependency Management**
   - Regular security audits
   - Automated dependency updates
   - Lock file consistency

3. **Testing Strategy**
   - Unit tests for business logic
   - Integration tests for APIs
   - End-to-end tests for critical paths

4. **Deployment Safety**
   - Staging environment testing
   - Production approval gates
   - Rollback procedures

## 🚀 Getting Started

1. **Fork/Clone the repository**
2. **Create feature branch** from `develop`
3. **Make changes** and commit
4. **Push branch** and create Pull Request
5. **Pipeline runs automatically** on PR
6. **Merge to develop** for staging deployment
7. **Merge to main** for production deployment

## 📞 Support

If you encounter issues with the CI/CD pipeline:

1. Check GitHub Actions logs
2. Verify environment variables
3. Test locally with Docker
4. Contact the development team

---

**Note**: This pipeline is designed for a monorepo structure with separate frontend and backend directories. Adjust paths and commands according to your specific project structure.
