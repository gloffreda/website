ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine as builder

ARG NPM_TOKEN
ENV NPM_TOKEN=${NPM_TOKEN}

ENV PROJECT_PATH=/loffreda
WORKDIR $PROJECT_PATH

COPY --chown=node . .
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine AS server

ENV PROJECT_PATH=/loffreda

COPY --from=builder $PROJECT_PATH/build /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template