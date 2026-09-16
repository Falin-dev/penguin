# Penguin — Current Project Context

Last updated: 2026-09-15

## Project

Penguin is a Linux-focused social/discussion platform.

The long-term goal is to combine:

- Linux community
- social features
- AI-powered recommendations
- semantic search
- RAG
- community insights
- AI moderation
- personalization

The project is primarily a learning vehicle for software engineering and AI engineering.

---

## Developer's learning goal

The developer is learning software engineering and AI simultaneously.

They do NOT want vibe coding.

The developer should write the implementation whenever practical.

The AI should teach, explain, review and debug.

---

## Current stack

Backend:

- Node.js
- Express
- PostgreSQL
- Supabase
- pg
- ES Modules
- bcrypt
- jsonwebtoken

Frontend:

- React
- Vite

---

## Backend architecture

Current pattern:

Route
→ Controller
→ Service
→ Repository
→ PostgreSQL

Middleware is used for cross-cutting concerns.

---

## Existing backend

server.js:
Starts Express server.

app.js:
Creates/configures Express and registers routes/middleware.

config/env.js:
Loads environment variables.

config/database.js:
Creates PostgreSQL Pool using DATABASE_URL.

health module:
Health endpoint tests server/database connectivity.

users module currently contains:

user.routes.js
user.controller.js
user.service.js
user.repository.js

---

## Existing user endpoint

GET /user/all

Current flow:

GET /user/all
→ user.routes.js
→ user.controller.js
→ user.service.js
→ user.repository.js
→ PostgreSQL

The endpoint returns safe user fields such as username/name rather than password_hash.

---

## Error handling

Central error middleware exists.

It is registered after normal routes.

Controllers can call:

next(error)

to enter the error-handling chain.

Advanced error handling/AppError is intentionally postponed.

---

## Database

Database provider:

Supabase PostgreSQL.

Node connects through pg.

Current schema:

### users

id UUID primary key default gen_random_uuid()

username varchar(30) NOT NULL UNIQUE

name varchar(30)

password_hash text NOT NULL

email text

dob date NOT NULL

created_at timestamptz DEFAULT now()

### posts

id UUID primary key default gen_random_uuid()

user_id UUID foreign key users.id

title text NOT NULL

image_url text

content text

posted_at timestamptz DEFAULT now()

### post_likes

post_id UUID foreign key posts.id

liked_by UUID foreign key users.id

liked_at timestamptz DEFAULT now()

PRIMARY KEY(post_id, liked_by)

---

## Immediate next feature

Authentication.

Order:

1. Register
2. bcrypt password hashing
3. Login
4. JWT generation
5. JWT verification
6. Auth middleware
7. Protected route

Do not implement all of these at once.

---

## Long-term AI roadmap

1. Distro recommendation
2. Semantic search
3. RAG / Ask Penguin
4. AI post assistant
5. AI moderation
6. Community insights
7. Personalized feed

AI should be learned progressively.

Start with fundamentals before complex RAG/agent systems.

---

## Important architectural philosophy

Do not overengineer.

Do not introduce microservices, Kubernetes, CQRS, event buses, elaborate dependency injection, Redis, GraphQL, etc. unless a genuine problem requires them.

Every abstraction must solve a real problem.

---

## How to continue

Before answering a Penguin question:

1. Read AGENTS.md.
2. Read this file.
3. Inspect the actual project files when necessary.
4. Determine the current implementation state from the code, not assumptions.
5. Teach before implementing.
6. Give small tasks.
7. Review my implementation.
8. Keep the project moving incrementally.