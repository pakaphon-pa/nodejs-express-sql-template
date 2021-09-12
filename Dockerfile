# ---------- BASE -------------
FROM node:14-alpine AS base

WORKDIR /app

# ---------- BUILD ------------

FROM base AS builder

COPY package*.json .babelrc ./

RUN yarn 

COPY ./src ./src

RUN yarn build

# ---------- RELEASE ------------

FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

USER node

ENTRYPOINT [ "node", "./build/server.js" ]



