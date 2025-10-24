const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Product {
    id: ID!
    name: String!
    price: Float!
    categoryId: Int!
  }

  input ProductInput {
    name: String!
    price: Float!
    categoryId: Int!
  }

  type RootQuery {
    getAllProducts: [Product!]!
    getProductById(id: ID!): Product
  }

  type RootMutation {
    addProduct(productInput: ProductInput!): Product
    updateProductById(id: ID!, productInput: ProductInput!): Product
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;