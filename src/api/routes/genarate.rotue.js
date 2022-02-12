const generateController = require("../controllers/genarate.controller");

// Schema for Swagger
const generateUserSchema = require("../../swagger/schema/GenerateUser.json");
const generateAddressSchema = require("../../swagger/schema/GenerateAddress.json");
const generateCreditCardSchema = require("../../swagger/schema/GenerateCreditCard.json");
const generateBlockchainAddressSchema = require("../../swagger/schema/GenerateBlockchainAddress.json");

module.exports = [
  {
    method: "GET",
    url: `/api/`,
    schema: generateUserSchema,
    handler: generateController.generateUser,
  },
  {
    method: "GET",
    url: `/api/address/`,
    schema: generateAddressSchema,
    handler: generateController.generateAddress,
  },
  {
    method: "GET",
    url: `/api/credit_card/`,
    schema: generateCreditCardSchema,
    handler: generateController.generateCreditCard,
  },
  {
    method: "GET",
    url: `/api/blockchain_address/`,
    schema: generateBlockchainAddressSchema,
    handler: generateController.generateBlockchainAddress,
  },
];
