#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

./node_modules/.bin/lint-staged
yarn build
git add dist
