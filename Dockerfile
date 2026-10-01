# syntax=docker/dockerfile:1

# ==============================================================================
# Multi-stage Dockerfile for ZFP Jagoš & partneři (Self-Hosted Coolify / VPS)
# ==============================================================================

# --- Stage 1: Dependencies ---
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# --- Stage 2: Builder ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Run build (Vite build + static pre-render snapshot generation for all 26 routes)
ENV NODE_ENV=production
RUN npm run build

# --- Stage 3: Production Runner ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install wget for healthcheck
RUN apk add --no-cache wget

# Create non-root user for DevSecOps best practices
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 zfpapp

# Copy built assets and server
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

# Create persistent data directory for leads fallback
RUN mkdir -p /app/data && chown -R zfpapp:nodejs /app/data

USER zfpapp

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

CMD ["node", "server.js"]
