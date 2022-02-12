const Fastify = require("fastify");

// Cron
require("./cron");

// Plugins
const helmetPlugin = require("fastify-helmet");
const swaggerPlugin = require("fastify-swagger");
const fastifyCors = require("fastify-cors");

// Config
const swaggerConfig = require("./swagger/swagger.js");

// Routes
const routes = require("./api/routes/index");

// Database Connection for MongoDB
require("./helpers/database")();

// Export the Fastify Server
module.exports = function build(opts = {}) {
  const fastify = Fastify(opts);

  // Initialize Plugins
  fastify.register(helmetPlugin);
  fastify.register(fastifyCors, {
    origin: [
      "http://localhost:3000",
      "http://randomusergeneratorr.herokuapp.com",
      "https://randomusergeneratorr.herokuapp.com",
    ],
  });
  fastify.register(swaggerPlugin, swaggerConfig);

  // Routes
  routes.forEach((route) => fastify.route(route));

  return fastify;
};
