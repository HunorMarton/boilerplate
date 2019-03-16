#!/bin/bash

npx create-react-app "$1" --typescript

cd "$1"
mkdir api
mkdir components
mkdir containers
mkdir types
