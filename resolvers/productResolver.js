const Product = require("../models/Product");

const productResolver = {
    products: async () => {
        try {
            return await Product.find();
        } catch (error) {
            throw new Error("Failed to fetch products");
        }
    },
    product: async ({ id }) => {
        try {
            return await Product.findById(id);
        } catch (error) {
            throw new Error("Failed to fetch product");
        }
    },
    createProduct: async ({ name, price }) => {
        try {
            const newProduct = new Product({ name, price });
            return await newProduct.save();
        } catch (error) {
            throw new Error("Failed to create product");
        }
    },
    updateProduct: async ({ id, name, price }) => {
        try {
            const product = await Product.findById(id);
            if (!product) throw new Error("Product not found");
            product.name = name;
            product.price = price;
            return await product.save();
        } catch (error) {
            throw new Error("Failed to update product");
        }
    },
    deleteProduct: async ({ id }) => {
        try {
            const result = await Product.findByIdAndDelete(id);
            if (!result) throw new Error("Product not found");
            return true;
        } catch (error) {
            throw new Error("Failed to delete product");
        }
    },
};

module.exports = productResolver;