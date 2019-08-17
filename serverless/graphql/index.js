const {
  graphql
} = require('graphql');
const rawSchema = require('./schema');

// require('dotenv').config()

module.exports = {
  schema: rawSchema,
  graphql
}