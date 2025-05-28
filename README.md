# Date Time Checker - CI/CD Demo

[![CI/CD Pipeline](https://github.com/your-username/date-time-checker-cicd/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/your-username/date-time-checker-cicd/actions/workflows/ci-cd.yml)
[![Security Scan](https://github.com/your-username/date-time-checker-cicd/actions/workflows/security.yml/badge.svg)](https://github.com/your-username/date-time-checker-cicd/actions/workflows/security.yml)

A full-stack application demonstrating modern CI/CD practices with GitHub Actions, featuring a React TypeScript frontend and Node.js backend for date/time validation.

## 🚀 Features

- **Frontend**: Modern React app with Tailwind CSS
- **Backend**: RESTful API with Express.js
- **CI/CD**: Automated testing, building, and deployment
- **Security**: Vulnerability scanning and dependency auditing
- **Docker**: Containerized deployment ready
- **Testing**: Comprehensive test coverage

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │
│   React Frontend│────│ Express Backend │
│   (Tailwind CSS)│    │   (Node.js)     │
│                 │    │                 │
└─────────────────┘    └─────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
            ┌─────────────────┐
            │   GitHub Actions │
            │      CI/CD      │
            └─────────────────┘
```

## 🛠️ Technology Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Custom hooks** for state management

### Backend
- **Node.js** with Express.js
- **CORS** enabled for cross-origin requests
- **Day.js** for date manipulation
- **RESTful API** design

### DevOps
- **GitHub Actions** for CI/CD
- **Docker** for containerization
- **Nginx** for production serving
- **ESLint** for code quality

## 🚦 CI/CD Pipeline

Our CI/CD pipeline includes:

### ✅ **Continuous Integration**
- Code linting and formatting
- TypeScript compilation checks
- Unit and integration testing
- Security vulnerability scanning
- Dependency auditing

### 🚀 **Continuous Deployment**
- Automatic staging deployment on `develop` branch
- Manual production deployment on `main` branch
- Docker containerization
- Health checks and monitoring

### 📊 **Quality Assurance**
- Pull request validation
- Code coverage reporting
- Bundle size monitoring
- Performance testing

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/date-time-checker-cicd.git
cd date-time-checker-cicd

# Start backend
cd backend
npm install
npm start

# Start frontend (in a new terminal)
cd frontend
npm install
npm run dev
```

### Using Docker
```bash
# Build and run all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📝 API Documentation

### Endpoint: `/api/check-datetime`
- **Method**: POST
- **Content-Type**: application/json

**Request Body:**
```json
{
  "datetime": "2024-01-01 12:00:00"
}
```

**Response:**
```json
{
  "valid": true,
  "message": "Date time is valid"
}
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Linting
```bash
cd frontend
npm run lint
```

### Integration Tests
```bash
# Start backend first
cd backend && npm start

# Run integration tests
cd backend && npm test
```

## 📋 Project Structure

```
date-time-checker-cicd/
├── .github/workflows/     # GitHub Actions workflows
├── backend/              # Node.js Express API
│   ├── test/            # API tests
│   ├── Dockerfile       # Backend container config
│   └── package.json     # Backend dependencies
├── frontend/            # React TypeScript app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks
│   │   └── utils/       # Utility functions
│   ├── Dockerfile       # Frontend container config
│   └── package.json     # Frontend dependencies
├── docs/                # Documentation
├── docker-compose.yml   # Multi-service setup
└── README.md           # This file
```

## 🔄 Workflow

1. **Development**: Create feature branch from `develop`
2. **Testing**: Push triggers automated tests
3. **Review**: Create PR for code review
4. **Staging**: Merge to `develop` deploys to staging
5. **Production**: Merge to `main` deploys to production

## 📊 Monitoring

- **Health Checks**: Automated service monitoring
- **Performance**: Build time and bundle size tracking
- **Security**: Regular vulnerability scans
- **Quality**: Code coverage and lint reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [CI/CD Documentation](docs/CI-CD.md)
- [Frontend README](frontend/README.md)
- [GitHub Actions](https://github.com/your-username/date-time-checker-cicd/actions)

---

**Built with ❤️ for learning CI/CD best practices**