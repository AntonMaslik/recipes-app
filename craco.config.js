const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@custom-types": resolvePath("./src/types"),
      "@apollo-custom": resolvePath("./src/apollo"),
    },
  },
};
