









🏦 Bank Account Micro Frontend Application

A modern Angular 21 Micro Frontend application built using Native Federation.

This project demonstrates how a large Angular application can be divided into independently developed and deployable Micro Frontends while maintaining a common Host application.

The project includes authentication, dashboard, transactions, and profile modules.

🚀 Live Demo
Frontend – Render

🌐 Application:
https://bankaccount-mfe.onrender.com

Backend API – Voroa

🌐 API:
https://bank-api.getvoroa.com

API Health Check

https://bank-api.getvoroa.com/api/health

Expected response:

{
  "success": true,
  "message": "API is working fine"
}
🏗️ Architecture

The application follows a Micro Frontend architecture using Angular Native Federation.

                         ┌─────────────────────────┐
                         │   Bank Account Host     │
                         │      Angular 21         │
                         │                         │
                         │       Login             │
                         │       Layout            │
                         └────────────┬────────────┘
                                      │
                    Native Federation│
                                      │
             ┌────────────────────────┼────────────────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
     ┌───────────────┐       ┌────────────────┐       ┌────────────────┐
     │ Dashboard MFE │       │ Transactions   │       │  Profile MFE   │
     │               │       │      MFE       │       │                │
     └───────────────┘       └────────────────┘       └────────────────┘
             │                        │                        │
             └────────────────────────┼────────────────────────┘
                                      │
                                      ▼
                           ┌─────────────────────┐
                           │    Express API      │
                           │       Node.js       │
                           │      Voroa          │
                           └─────────────────────┘
📦 Project Structure
bankaccount-mfe/
│
├── src/
│   └── ...
│
├── projects/
│   │
│   ├── bankaccount-host/
│   │   └── src/
│   │       ├── app/
│   │       │   ├── login/
│   │       │   ├── layout/
│   │       │   ├── core/
│   │       │   └── app.routes.ts
│   │       ├── main.ts
│   │       └── styles.scss
│   │
│   ├── dashboard-mfe/
│   │   └── src/
│   │       └── app/
│   │
│   ├── transactions-mfe/
│   │   └── src/
│   │       └── app/
│   │
│   └── profile-mfe/
│       └── src/
│           └── app/
│
├── api/
│   ├── server.js
│   ├── package.json
│   └── routes/
│       ├── auth.routes.js
│       ├── dashborad.routes.js
│       ├── transactions.routers.js
│       └── profile.routes.js
│
├── angular.json
├── package.json
├── package-lock.json
└── README.md
🧩 Micro Frontends
1. Bank Account Host

The Host application is responsible for:

Login
Authentication
Layout
Navigation
Route configuration
Loading Micro Frontends
Authentication Guard

Example:

{
  path: 'dashboard',
  loadChildren: () =>
    loadRemoteModule(
      'dashboard-mfe',
      './routes'
    ).then(m => m.routes)
}
2. Dashboard MFE

Responsible for:

Customer information
Account summary
Dashboard shortcuts
Dashboard-related API calls
3. Transactions MFE

Responsible for:

Transaction information
Transaction listing
Transaction APIs
4. Profile MFE

Responsible for:

Customer profile
Profile information
Profile APIs
⚡ Technologies Used
Frontend
Angular 21
TypeScript
RxJS
Angular Router
Angular Signals
Reactive Forms
Native Federation
Bootstrap
SCSS
REST API
HTTP Client
Route Guards
Backend
Node.js
Express.js
REST APIs
CORS
Development Tools
VS Code
Git
GitHub
Postman
npm
Angular CLI
Deployment
Frontend: Render
Backend/API: Voroa
Source Code: GitHub
🔗 Native Federation

This project uses:

@angular-architects/native-federation-v4

Native Federation allows the Angular applications to communicate and load independently without using the traditional Webpack Module Federation approach.

The Host dynamically loads the Micro Frontends.

Host
 │
 ├── dashboard-mfe
 │
 ├── transactions-mfe
 │
 └── profile-mfe
🛠️ Important Commands Used
Create Angular Workspace
ng new bankaccount-mfe
Check Angular Version
ng version
Install Bootstrap
npm install bootstrap
Install Native Federation
npm install @angular-architects/native-federation-v4
Initialize Native Federation

Example Host command:

ng g @angular-architects/native-federation:init \
--project bankaccount-host \
--port 4201 \
--type host

Example Remote:

ng g @angular-architects/native-federation:init \
--project dashboard-mfe \
--port 4202 \
--type remote

Similarly, the other Micro Frontends can be configured as remotes.

▶️ Run the Applications Locally

Run the Host:

ng serve bankaccount-host

Run Dashboard MFE:

ng serve dashboard-mfe

Run Transactions MFE:

ng serve transactions-mfe

Run Profile MFE:

ng serve profile-mfe
🏗️ Production Build

Build the Host:

ng build bankaccount-host

Build a Micro Frontend:

ng build dashboard-mfe
ng build transactions-mfe
ng build profile-mfe
📁 Production Output

The Host production build is generated under:

dist/
└── bankaccount-host/
    └── browser/

This directory is used as the frontend deployment directory on Render.

🔌 Backend API

The backend is located inside:

api/

Install backend dependencies:

cd api
npm install

Run the API locally:

node server.js

The API runs on:

http://localhost:5000

Health check:

http://localhost:5000/api/health
🔐 Authentication API

Login endpoint:

POST /api/auth/login

Production:

https://bank-api.getvoroa.com/api/auth/login

The API is consumed by the Angular Host application.

🌐 CORS Configuration

The Express API allows requests from the local Angular applications and the deployed Render application.

Example:

app.use(
  cors({
    origin: [
      'http://localhost:4200',
      'http://localhost:4201',
      'http://localhost:4202',
      'http://localhost:4203',
      'https://bankaccount-mfe.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

This allows the deployed Angular application to communicate with the deployed Express API.

🚀 Deployment
Frontend – Render

The Angular Host application is deployed on Render.

Build Command
ng build bankaccount-host
Publish Directory
dist/bankaccount-host/browser
Live Application

https://bankaccount-mfe.onrender.com

Backend – Voroa

The Express API is deployed separately on Voroa.

Backend Directory
api/
Start Command
node server.js
Production API

https://bank-api.getvoroa.com

🔄 Deployment Flow
Developer
    │
    ▼
GitHub Repository
    │
    ├──────────────────────┐
    │                      │
    ▼                      ▼
Render                   Voroa
    │                      │
    ▼                      ▼
Angular Host             Express API
    │                      │
    └──────────┬───────────┘
               │
               ▼
        Live Application
🧪 API Testing

The APIs can be tested using Postman.

Example health request:

GET https://bank-api.getvoroa.com/api/health

Example login request:

POST https://bank-api.getvoroa.com/api/auth/login

Content-Type:

application/json
📌 Key Features Demonstrated
Angular 21
Micro Frontend Architecture
Native Federation
Host and Remote applications
Lazy loading of Micro Frontends
Standalone Angular components
Angular Router
Route Guards
Reactive Forms
REST API integration
RxJS
Angular Signals
Express.js backend
CORS configuration
Git & GitHub
Production build
Frontend deployment
Backend deployment
Independent MFE architecture
🎯 Purpose of the Project

This project was created as a practical demonstration of a modern Angular Micro Frontend architecture.

It demonstrates how multiple Angular applications can be developed as independent Micro Frontends and integrated into a common Host application using Native Federation.

It also demonstrates a complete development-to-deployment workflow:

Angular Development
        ↓
Native Federation
        ↓
REST API Integration
        ↓
GitHub
        ↓
Production Build
        ↓
Render + Voroa
        ↓
Live Application
👩‍💻 Author

Megha Kulkarni

Angular Front End Developer

Skills demonstrated in this project:

Angular | TypeScript | RxJS | Native Federation | Micro Frontends | REST APIs | Node.js | Express | Git | GitHub | Render | Voroa

⭐ If you find this project useful, feel free to explore the repository and try the live application.







# BankaccountMfe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
