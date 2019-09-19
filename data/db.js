const knex = require('knex');

const defaults = require('../config/defaults')

const environment = defaults.environment || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
