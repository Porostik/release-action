FROM node:16

ENV API_TOKEN=INPUT_API_TOKEN
ENV PULL_NAME=INPUT_PULL_NAME

WORKDIR /release-action

COPY . /release-action

RUN yarn

RUN yarn build

CMD ["yarn", "start"]
