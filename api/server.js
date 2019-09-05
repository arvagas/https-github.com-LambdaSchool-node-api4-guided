const express = require('express');
const helmet = require('helmet');

const defaults = require('../config/defaults')
console.log('environment:', defaults.environment)

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
