# Multi-stage Dockerfile for Next.js (Node.js runtime)
# Uses production-only deps in the final image and supports PORT env

FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Install dependencies (with dev deps) for building
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM deps AS build
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production runtime image
FROM base AS runner
WORKDIR /app

# Copy only necessary runtime files
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Default port inside the container
EXPOSE 3000

# Start Next.js on the fixed internal port 3000 and all interfaces
CMD ["sh", "-c", "node node_modules/next/dist/bin/next start -p 3000 -H 0.0.0.0"]
