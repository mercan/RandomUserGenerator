require("dotenv").config();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

module.exports = {
  env,
  port,
  databaseURL: process.env.MONGODB_URI,
};
