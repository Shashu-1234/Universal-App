# Universal Smart Remote AI - Project Structure

## Repository Layout

```
Universal-App/
├── README.md                          # Main project documentation
├── .gitignore                         # Git ignore rules
├── PROJECT_STRUCTURE.md              # This file
│
├── mobile/                            # Flutter Mobile Application
│   ├── pubspec.yaml                  # Flutter dependencies
│   ├── lib/
│   │   ├── main.dart                 # App entry point
│   │   ├── config/
│   │   │   ├── routes.dart           # Navigation routes
│   │   │   ├── theme.dart            # Theme configuration
│   │   │   └── constants.dart        # App constants
│   │   ├── models/
│   │   │   ├── device.dart           # Device model
│   │   │   ├── command.dart          # Command model
│   │   │   ├── capability.dart       # Device capability
│   │   │   ├── routine.dart          # Automation routine
│   │   │   └── user.dart             # User model
│   │   ├── services/
│   │   │   ├── auth_service.dart     # Authentication
│   │   │   ├── discovery_service.dart # Device discovery
│   │   │   ├── device_service.dart   # Device operations
│   │   │   ├── action_service.dart   # Execute commands
│   │   │   ├── sync_service.dart     # Cloud sync
│   │   │   ├── voice_service.dart    # Voice control
│   │   │   └── offline_service.dart  # Offline support
│   │   ├── providers/
│   │   │   ├── auth_provider.dart    # Auth state
│   │   │   ├── device_provider.dart  # Devices state
│   │   │   ├── discovery_provider.dart # Discovery state
│   │   │   └── preferences_provider.dart # User preferences
│   │   ├── screens/
│   │   │   ├── splash_screen.dart
│   │   │   ├── login_screen.dart
│   │   │   ├── home_screen.dart      # Main device list
│   │   │   ├── discovery_screen.dart # Device discovery
│   │   │   ├── device_detail_screen.dart # Device info
│   │   │   ├── remote_screen.dart    # Remote control UI
│   │   │   ├── routines_screen.dart  # Automation
│   │   │   └── settings_screen.dart  # App settings
│   │   ├── widgets/
│   │   │   ├── device_card.dart
│   │   │   ├── remote_control.dart
│   │   │   ├── dynamic_control_renderer.dart
│   │   │   ├── voice_button.dart
│   │   │   └── loading_indicator.dart
│   │   ├── utils/
│   │   │   ├── logger.dart           # Logging utility
│   │   │   ├── validators.dart       # Validation helpers
│   │   │   └── extensions.dart       # Dart extensions
│   │   └── native/
│   │       └── channel_handler.dart  # Native communication
│   ├── android/                      # Android native code
│   │   ├── app/
│   │   │   └── src/main/
│   │   │       ├── kotlin/           # Kotlin native modules
│   │   │       └── AndroidManifest.xml
│   │   └── build.gradle
│   ├── ios/                          # iOS native code
│   │   └── Runner/                   # iOS project
│   └── test/                         # Flutter tests
│
├── backend/                           # Backend API Services
│   ├── package.json                  # Node.js dependencies
│   ├── .env.example                  # Environment variables template
│   ├── src/
│   │   ├── index.ts                  # Entry point
│   │   ├── config/
│   │   │   ├── database.ts           # DB configuration
│   │   │   ├── redis.ts              # Redis configuration
│   │   │   └── env.ts                # Environment config
│   │   ├── middleware/
│   │   │   ├── auth.ts               # JWT authentication
│   │   │   ├── error_handler.ts      # Error handling
│   │   │   └── logger.ts             # Request logging
│   │   ├── routes/
│   │   │   ├── auth.ts               # Auth endpoints
│   │   │   ├── devices.ts            # Device endpoints
│   │   │   ├── discovery.ts          # Discovery endpoints
│   │   │   ├── capabilities.ts       # Capability endpoints
│   │   │   ├── remotes.ts            # Remote schema endpoints
│   │   │   ├── actions.ts            # Control action endpoints
│   │   │   └── routines.ts           # Automation endpoints
│   │   ├── services/
│   │   │   ├── auth_service.ts       # Authentication logic
│   │   │   ├── device_registry.ts    # Device management
│   │   │   ├── discovery_engine.ts   # Device discovery
│   │   │   ├── capability_service.ts # Capability detection
│   │   │   ├── remote_generator.ts   # Remote schema generation
│   │   │   ├── action_executor.ts    # Command execution
│   │   │   ├── routine_orchestrator.ts # Automation
│   │   │   └── learning_service.ts   # AI learning
│   │   ├── protocols/
│   │   │   ├── mdns_adapter.ts       # mDNS/Bonjour
│   │   │   ├── ssdp_adapter.ts       # SSDP/UPnP
│   │   │   ├── ble_adapter.ts        # Bluetooth LE
│   │   │   ├── matter_adapter.ts     # Matter protocol
│   │   │   ├── homekit_adapter.ts    # HomeKit integration
│   │   │   ├── smartthings_adapter.ts # SmartThings API
│   │   │   ├── alexa_adapter.ts      # Alexa integration
│   │   │   └── google_home_adapter.ts # Google Home integration
│   │   ├── models/
│   │   │   ├── device.ts
│   │   │   ├── capability.ts
│   │   │   ├── command.ts
│   │   │   ├── routine.ts
│   │   │   └── user.ts
│   │   ├── database/
│   │   │   ├── migrations/           # Database migrations
│   │   │   ├── seeds/                # Seed data
│   │   │   └── schema.ts             # Database schema
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── cache.ts              # Caching utilities
│   │   │   ├── validators.ts         # Data validation
│   │   │   └── converters.ts         # Type conversion
│   │   └── types/
│   │       └── index.ts              # TypeScript types
│   ├── tests/
│   │   ├── unit/                     # Unit tests
│   │   ├── integration/              # Integration tests
│   │   └── e2e/                      # End-to-end tests
│   └── docker/
│       ├── Dockerfile
│       └── docker-compose.yml
│
├── docs/                              # Documentation
│   ├── README.md                      # Documentation index
│   ├── ARCHITECTURE.md               # System architecture
│   ├── API.md                        # REST API specification
│   ├── DEVICE_DISCOVERY.md           # Discovery algorithms
│   ├── CAPABILITY_MAPPING.md         # Capability system
│   ├── REMOTE_GENERATION.md          # Remote generation
│   ├── SECURITY.md                   # Security model
│   ├── DEPLOYMENT.md                 # Deployment guide
│   ├── DATABASE_SCHEMA.md            # Database design
│   ├── TESTING.md                    # Testing strategy
│   └── CONTRIBUTING.md               # Contributing guidelines
│
├── infrastructure/                    # Cloud Infrastructure
│   ├── kubernetes/
│   │   ├── backend-deployment.yaml   # Backend K8s deployment
│   │   ├── postgres-statefulset.yaml # Database StatefulSet
│   │   ├── redis-deployment.yaml     # Redis deployment
│   │   ├── nginx-ingress.yaml        # Ingress configuration
│   │   └── secrets.yaml              # K8s secrets
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── vpc.tf
│   ├── docker-compose.yml            # Local development
│   ├── scripts/
│   │   ├── deploy.sh                 # Deployment script
│   │   ├── backup.sh                 # Database backup
│   │   └── restore.sh                # Database restore
│   └── monitoring/
│       ├── prometheus.yml            # Prometheus config
│       └── grafana-dashboards/       # Grafana dashboards
│
└── .github/
    └── workflows/
        ├── ci.yml                     # CI pipeline
        ├── mobile-build.yml           # Mobile app build
        └── backend-deploy.yml         # Backend deployment
```

## File Purposes

### Mobile App (Flutter)
- **models/**: Data classes representing domain entities
- **services/**: Business logic and API communication
- **providers/**: State management using Provider/Riverpod
- **screens/**: Full-page UI components
- **widgets/**: Reusable UI components
- **config/**: Application configuration and routing
- **native/**: Platform-specific native code bridges

### Backend (Node.js/TypeScript)
- **services/**: Core business logic
- **protocols/**: Device protocol adapters and integrations
- **routes/**: HTTP endpoint handlers
- **models/**: Database models and schemas
- **middleware/**: Request processing and error handling
- **database/**: SQL migrations and ORM setup

### Documentation
- Architecture decisions and system design
- API specifications
- Deployment and operational guides
- Contributing guidelines

### Infrastructure
- Kubernetes manifests for production deployment
- Terraform code for cloud infrastructure
- Docker compose for local development
- CI/CD pipeline definitions

## Next Steps

1. Set up mobile project structure (Flutter)
2. Implement backend API services
3. Create device discovery engines
4. Build dynamic remote generation
5. Add authentication and security
6. Implement offline support
7. Add testing and documentation
8. Set up CI/CD pipeline
