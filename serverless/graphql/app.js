const { graphql } = require('graphql');
const rawSchema = require('./schema');
require('dotenv').config()

const query = `{ hello products { name } reviews { title, comment, grade } }`;

graphql({
  schema: rawSchema,
  source: query
}).then(result => {
  console.log('result', JSON.stringify(result.data.products));
  console.log('reviews', JSON.stringify(result.data.reviews));
})