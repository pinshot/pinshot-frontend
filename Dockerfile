FROM node:22-alpine AS base

ARG APP_NAME
ENV APP_NAME=$APP_NAME

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 프로젝트 파일 복사 및 빌드에 필요없는 파일 제거
FROM base AS deps
RUN apk update
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN pnpm install turbo@2.3.2 --global
RUN turbo prune $APP_NAME --docker



# 의존성 설치 & build
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=deps /app/out/json/ .
RUN pnpm install --frozen-lockfile
COPY --from=deps /app/out/full/ .
# Turbo remote cache 관련 설정
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM
# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN
RUN pnpm turbo build

FROM base AS runner
WORKDIR /app

# 사용자 설정
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/$APP_NAME/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/$APP_NAME/.next/static ./apps/$APP_NAME/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/$APP_NAME/public ./apps/$APP_NAME/public

# 실행
CMD ["sh", "-c", "node apps/$APP_NAME/server.js"]
