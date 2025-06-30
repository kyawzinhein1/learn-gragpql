const productResolver = require("./resolvers/productResolver");
const userResolver = require("./resolvers/userResolver");

const root = {
    ...userResolver,
    ...productResolver,
};

module.exports = root;
