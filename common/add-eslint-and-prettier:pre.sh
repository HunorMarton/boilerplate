#!/bin/bash

cd "$1"

echo "Add eslint and prettier"
yarn add -D prettier
yarn add -D eslint

if [ "$2" = true ]
then
  # This one is meant to be for node js development
  npx install-peerdeps --dev eslint-config-airbnb-base --yarn
else
  # This one is meant to be for React development
  npx install-peerdeps --dev eslint-config-airbnb --yarn
fi

yarn add -D eslint-config-prettier eslint-plugin-prettier
yarn add -D @typescript-eslint/parser
yarn add -D @typescript-eslint/eslint-plugin
