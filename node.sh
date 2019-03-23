#!/bin/bash

NAME=$1
USE_TYPESCRIPT=$2
ADD_EXPRESS=$3
ADD_SOCKET_IO=$4
ADD_MONGO_DB=$5

mkdir "$NAME"
cd "$NAME"
npm init -y

if [ $USE_TYPESCRIPT = true ]; then
  echo "Initializing typescript"
  yarn add -D typescript
  yarn add -D @types/node
  npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

  echo "Utilities for compiling and running"
  yarn add -D ts-node
  yarn add -D nodemon
fi

mkdir src

if [ $ADD_EXPRESS = true ]; then
  yarn add express
  yarn add body-parser

  if [ $USE_TYPESCRIPT = true ]; then
    yarn add @types/express
    yarn add @types/body-parser
  fi
fi

if [ $ADD_SOCKET_IO = true ]; then
  yarn add socket.io

  if [ $USE_TYPESCRIPT = true ]; then
    yarn add @types/socket.io
  fi
fi

if [ $ADD_MONGO_DB = true ]; then
  yarn add mongoose

  if [ $USE_TYPESCRIPT = true ]; then
    yarn add @types/mongoose
  fi
fi




