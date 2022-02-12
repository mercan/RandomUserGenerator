const GenerateService = require("../../services/GenerateService");
const StatisticsService = require("../../services/StatisticsService");

const generateUser = (req, res) => {
  const { gender, country } = req.query;
  const user = GenerateService.generateUser(gender, country);

  if (user) {
    StatisticsService.updateTotalRequest();
  }

  return res.status(200).send({ statusCode: 200, response: user });
};

const generateAddress = (req, res) => {
  const address = GenerateService.generateAddress();

  if (address) {
    StatisticsService.updateTotalRequest();
  }

  return res.status(200).send({ statusCode: 200, response: address });
};

const generateCreditCard = (req, res) => {
  const creditCard = GenerateService.generateCreditCard();

  if (creditCard) {
    StatisticsService.updateTotalRequest();
  }

  return res.status(200).send({ statusCode: 200, response: creditCard });
};

const generateBlockchainAddress = (req, res) => {
  const blockchainAdress = GenerateService.generateBlockchainAddress();

  if (blockchainAdress) {
    StatisticsService.updateTotalRequest();
  }

  return res.status(200).send({ statusCode: 200, response: blockchainAdress });
};

// Export the routes
module.exports = {
  generateUser,
  generateAddress,
  generateCreditCard,
  generateBlockchainAddress,
};
