const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shopping Cart API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: `https://add-to-cart-backend.onrender.com/api/v1`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
