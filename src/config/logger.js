require("dotenv").config();

module.exports = {
  path: process.env.NODE_ENV === "test" ? "./logs/test" : "./logs",
  fileName: "%DATE%",
  extension: ".log",
  dataPattern: "YYYY-MM-DD",
  timestampPattern: "YYYY-MM-DD HH:mm:ss",
};
