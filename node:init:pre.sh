#!/bin/bash

mkdir "$1"
cd "$1"
npm init -y

echo "Initializing typescript"
yarn add -D typescript
yarn add -D @types/node
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

echo "Utilities for compiling and running"
yarn add -D ts-node
yarn add -D nodemon

echo "Add entry file"
mkdir src
echo "// Start here" >> src/index.ts
