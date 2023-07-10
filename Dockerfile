FROM node:16

WORKDIR /github/workspace

ENV API_TOKEN=INPUT_API_TOKEN
ENV PULL_NAME=INPUT_PULL_NAME

COPY ./ /github/workspace

RUN yarn

RUN yarn build

CMD ["yarn", "start"]
