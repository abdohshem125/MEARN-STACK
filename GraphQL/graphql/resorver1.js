const products = require('../data');
const productSchema = require('../schema/product.schema');

module.exports = {
  getAllProducts: () => {
    try {
      return products;
    } catch (err) {
      const error = new Error("Failed to fetch products");
      error.code = 400;
      error.data = err;
      throw error;
    }
  },

  getProductById: ({ id }) => {
    try {
      const product = products.find(p => p.id === Number(id));
      if (!product) {
        const error = new Error("Product not found");
        error.code = 400;
        error.data = { id };
        throw error;
      }
      return product;
    } catch (err) {
      if (!err.code) {
        err.code = 400;
      }
      throw err;
    }
  },

  addProduct: ({ productInput }) => {
    try {
      const { error } = productSchema.validate(productInput);
      if (error) {
        const customError = new Error("Validation failed");
        customError.code = 400;
        customError.data = error.details;
        throw customError;
      }

      const newProduct = {
        id: products.length + 1,
        ...productInput
      };
      products.push(newProduct);
      return newProduct;
    } catch (err) {
      if (!err.code) err.code = 400;
      throw err;
    }
  },

  updateProductById: ({ id, productInput }) => {
    try {
      const index = products.findIndex(p => p.id === Number(id));
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
  }
};