module.exports = () => `version: '3.1'
services:
  mongo:
    image: mongo
    ports:
      - '27017:27017'`;
