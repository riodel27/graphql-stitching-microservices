const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} = require('graphql');

const {
  getProducts,
  getReviews,
  getProduct
} = require('./services');

const reviewType = new GraphQLObjectType({
  name: 'Review',
  description: 'A review',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of Review.',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the Review.',
    },
    comment: {
      type: GraphQLString,
      description: 'The comment of the Review.',
    },
    grade : {
      type: GraphQLInt
    },
    product: {
      type: productType,
      description: 'The product of the Review.',
      resolve: (review) => getProduct(review.product) 
    }
  })
})

const productType = new GraphQLObjectType({
  name: 'Product',
  description: 'A product',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of Product.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the Product.',
    },
    description: {
      type: GraphQLString,
      description: 'The description of the Product.',
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: (root) => 'world'
    },
    products: {
      type: new GraphQLList(productType),
      resolve: (root) => getProducts(),
    },
    reviews: {
      type: new GraphQLList(reviewType),
      resolve: (root) => getReviews(),
    }
  }),
});

module.exports = new GraphQLSchema({
  query: queryType,
  types: [reviewType, productType],
});