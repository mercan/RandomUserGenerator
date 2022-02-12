const { port } = require("./config/index");
const logger = require("./helpers/logger");

const server = require("./app")({
  logger,
});

// Start the server
server.listen(port, "0.0.0.0", (err) => {
  // If there was an error, log it
  if (err) {
    logger.error(`Error starting server: ${err}`, { service: "Fastify" });
    process.exit(1);
  }
});
