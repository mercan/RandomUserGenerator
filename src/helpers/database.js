const { databaseURL } = require("../config/index");
const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = () => {
  mongoose.connect(databaseURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  mongoose.connection.on("open", () =>
    logger.info("Connection to MongoDB", { service: "MongoDB" })
  );

  mongoose.connection.on("error", (error) =>
    logger.error(`Connection failed: ${error}`, { service: "MongoDB" })
  );
};
