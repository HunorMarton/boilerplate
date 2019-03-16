#!/bin/bash

cd "$1"

npx -p @storybook/cli sb init
yarn add -D @types/storybook__addon-actions
yarn add -D @types/storybook__addon-links
yarn add -D @types/storybook__react
