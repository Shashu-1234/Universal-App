# Universal Smart Remote AI

Production-ready cross-platform architecture for a dynamic universal smart remote with Flutter mobile + Node.js/TypeScript backend.

## Implemented Deliverables

- Flutter mobile scaffold with runtime route structure and dynamic control rendering widget
- Backend API service with endpoints for auth, discovery, devices, capabilities, remotes, actions, routines
- Canonical protocol normalization and personal-device filtering logic
- Capability analysis and schema-driven remote generation
- OAuth2-style token + refresh scaffolding
- PostgreSQL migration schema and Docker deployment stack (Postgres + Redis + backend)
- CI workflow for backend build and tests
- Unit tests for discovery normalization, schema generation, and voice command mapping

## Repository Structure

- `mobile/`: Flutter app scaffold and dynamic remote renderer
- `backend/`: Node.js + TypeScript API service and tests
- `docs/`: architecture, API, discovery, security, deployment, database docs
- `infrastructure/`: Kubernetes deployment scaffold

## Backend Commands

```bash
cd backend
npm ci
npm run build
npm test
npm start
```
