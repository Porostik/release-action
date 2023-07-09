FROM node:16

WORKDIR /release-action

COPY . /release-action

RUN yarn

CMD ["yarn", "start"]
