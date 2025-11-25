# The Anonymous Project

A complete SAP BTP-native solution for anonymous feedback management.

## Project Structure

```
anonymous-project/
├─ frontend/                    # Next.js frontend (JavaScript)
│  ├─ src/app/                 # App Router pages
│  ├─ components/              # Reusable components
│  └─ lib/                     # API layer
│
├─ app/                        # UI5 / Fiori app (HTML5) - optional
│  └─ webapp/
│
├─ srv/                        # CAP service implementation
│  ├─ index.js
│  ├─ cat-service.cds
│  └─ handlers/FeedbackService.js
│
├─ db/                         # CDS data model
│  └─ schema.cds
│
├─ app-router/                 # App Router for authentication + routing
│  ├─ xs-app.json
│  ├─ package.json
│  └─ xs-security.json
│
├─ mta.yaml
└─ package.json
```

## Features

- **Anonymous Feedback**: Users can submit feedback anonymously
- **Modern UI**: Minimal, dark-themed Next.js frontend (similar to The Unsent Project)
- **SAP CAP Backend**: Full-featured CAP service with proper data model
- **BTP Ready**: Includes MTA configuration for Cloud Foundry deployment

## Local Development

### Prerequisites

- Node.js (LTS)
- npm
- @sap/cds-dk (`npm i -g @sap/cds-dk`)

### Running Locally

1. **Install dependencies:**

```bash
npm install
cd frontend && npm install
cd ../app-router && npm install
```

2. **Start CAP backend:**

```bash
cds watch
# or
cds run
```

The backend will be available at `http://localhost:4004`

3. **Start Next.js frontend:**

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Backend Service

- **Service URL**: `http://localhost:4004/odata/v4/AnonymousService`
- **Entities**: 
  - `Feedback` - Anonymous feedback messages
  - `Employees` - Employee data
- **Actions**: 
  - `changeStatus` - Change feedback status

## Security

- `isAnonymous` defaults to **true** and is enforced by the server
- `submittedBy` association is hidden when `isAnonymous` is true
- XSUAA integration ready for BTP deployment

## Deployment to BTP Cloud Foundry

1. Create service instances:

```bash
cf create-service xsuaa application the-anonymous-uaa -c app-router/xs-security.json
cf create-service hanatrial hdi-shared the-anonymous-hdi
```

2. Build and deploy:

```bash
mbt build
cf deploy mta_archives/*.mtar
```

## Learn More

- [SAP CAP Documentation](https://cap.cloud.sap/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
