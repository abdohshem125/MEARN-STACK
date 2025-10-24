const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");

const products = require("../data");
const productSchema = require("../schema/product.schema");

// ===== PRODUCT TYPE =====
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

// ===== PRODUCT INPUT =====
const ProductInput = new GraphQLInputObjectType({
  name: "ProductInput",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

// ===== ROOT QUERY =====
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllProducts: {
      type: new GraphQLList(ProductType),
      resolve: () => {
        try {
          return products;
        } catch (err) {
          const error = new Error("Failed to fetch products");
          error.code = 400;
          error.data = err;
          throw error;
        }
      },
    },

    getProductById: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => {
        try {
          const product = products.find((p) => p.id === Number(id));
          if (!product) {
            const error = new Error("Product not found");
            error.code = 400;
            error.data = { id };
            throw error;
          }
          return product;
        } catch (err) {
          if (!err.code) err.code = 400;
          throw err;
        }
      },
    },
  },
});

// ===== ROOT MUTATION =====
const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        productInput: { type: new GraphQLNonNull(ProductInput) },
      },
      resolve: (_, { productInput }) => {
        try {
          const { error } = productSchema.validate(productInput);
          if (error) {
            const validationError = new Error("Validation failed");
            validationError.code = 400;
            validationError.data = error.details;
            throw validationError;
          }

          const newProduct = { id: products.length + 1, ...productInput };
          products.push(newProduct);
          return newProduct;
        } catch (err) {
          if (!err.code) err.code = 400;
          throw err;
        }
      },
    },

    updateProductById: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        productInput: { type: new GraphQLNonNull(ProductInput) },
      },
      resolve: (_, { id, productInput }) => {
        try {
          const index = products.findIndex((p) => p.id === Number(id));
          if (index === -1) {
            const error = new Error("Product not found");
            error.code = 400;
            error.data = { id };
            throw error;
          }

          const { error } = productSchema.validate(productInput);
          if (error) {
            const validationError = new Error("Validation failed");
            validationError.code = 400;
            validationError.data = error.details;
            throw validationError;
          }

          products[index] = { ...products[index], ...productInput };
          return products[index];
        } catch (err) {
          if (!err.code) err.code = 400;
          throw err;
        }
      },
    },
  },
});

// ===== EXPORT SCHEMA =====
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
