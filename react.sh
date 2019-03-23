#!/bin/bash

NAME=$1
USE_TYPESCRIPT=$2
ADD_STORYBOOK=$3
ADD_REDUX=$4
ADD_SOCKET_IO=$5

if [ $USE_TYPESCRIPT = true ]; then
  npx create-react-app "$NAME" --typescript
else
  npx create-react-app "$NAME"
fi

cd "$NAME"

cd src
mkdir api
mkdir components
mkdir containers
mkdir types
cd ..

if [ $ADD_STORYBOOK = true ]; then
  npx -p @storybook/cli sb init

  if [ $USE_TYPESCRIPT = true ]; then
    yarn add -D @types/storybook__addon-actions
    yarn add -D @types/storybook__addon-links
    yarn add -D @types/storybook__react
  fi
fi

if [ $ADD_REDUX = true ]; then
  yarn add redux
  yarn add react-redux
  yarn add redux-thunk
  yarn add reselect

  cd src
  mkdir ducks
  cd ..

  if [ $USE_TYPESCRIPT = true ]; then
    yarn add @types/react-redux

    yarn add typesafe-actions

  fi
fi

if [ $ADD_SOCKET_IO = true ]; then
  # yarn add socket.io
  yarn add socket.io-client


  cd src
  mkdir api
  cd ..

  if [ $USE_TYPESCRIPT = true ]; then
    # yarn add @types/socket.io
    yarn add @types/socket.io-client
  fi
fi
