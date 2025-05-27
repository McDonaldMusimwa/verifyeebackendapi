# Verifyee Backend

The backend for **Verifyee**, a fact-checking and claim-verification tool designed to help users verify statements made on podcasts and similar platforms.

## 🌐 Overview

This backend API powers the Verifyee web application. It allows for:
- User authentication and session management
- Retrieval and analysis of podcast transcripts
- Claim extraction and verification using AI
- Integration with external data sources (e.g., Twitter, YouTube)
- API documentation using Swagger

---

## ⚙️ Tech Stack

| Feature                 | Technology              |
|------------------------|-------------------------|
| Server                 | Node.js, Express        |
| Database               | MongoDB       |
| Authentication         | Passport.js + Google OAuth 2.0 |
| AI & Data Extraction   | @google/genai, youtube-transcript |
| Security               | Bcrypt, JWT             |
| API Documentation      | Swagger UI Express      |
| Dev Tools              | Nodemon, ESLint, Prettier |

---


---

## 🔐 Authentication

- Google OAuth 2.0 using `passport-google-oauth2`
- JWT for secure API access
- Session management with `express-session`

---

## 📦 Key Dependencies

### Core
- `express` — Web framework
- `mongoose` — MongoDB ODM
- `dotenv` — Env config
- `body-parser` — Request parsing
- `cors` — Cross-origin support

### Auth & Security
- `passport` — Auth middleware
- `passport-google-oauth2` — Google login
- `bcrypt` — Password hashing
- `jsonwebtoken` — Token-based auth

### AI/NLP Integration
- `@google/genai` — Google Generative AI API
- `youtube-transcript` — Fetch transcripts from YouTube videos

### External Data
- `@the-convocation/twitter-scraper` — Extract tweets for cross-verification

### Dev Tools
- `nodemon` — Live reloading during development
- `eslint`, `prettier` — Code linting and formatting
- `swagger-autogen`, `swagger-ui-express` — Auto-generated API docs

---

## 🚀 Scripts

| Command         | Description                      |
|----------------|----------------------------------|
| `npm run dev`  | Run server with `nodemon`        |
| `npm start`    | Start server using `node app.js` |
| `npm run lint` | Run ESLint and Prettier checks   |

---

## 📖 API Documentation

Interactive API docs are served using [Swagger UI](https://swagger.io/tools/swagger-ui/).

Once the server is running, visit:



