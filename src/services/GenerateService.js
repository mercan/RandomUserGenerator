const generateUser = require("../utils/generateUser");
const generateAddress = require("../utils/generateAddress");
const generateCreditCard = require("../utils/generateCreditCard");
const generateBlockchainAddress = require("../utils/generateBlockchainAddress");

class GenerateService {
  constructor({
    generateUser,
    generateAddress,
    generateCreditCard,
    generateBlockchainAddress,
  }) {
    this.generateUser = generateUser;
    this.generateAddress = generateAddress;
    this.generateCreditCard = generateCreditCard;
    this.generateBlockchainAddress = generateBlockchainAddress;
  }

  generateUser(gender, country) {
    return generateUser(gender, country);
  }

  generateAddress() {
    return generateAddress();
  }

  generateCreditCard() {
    return generateCreditCard();
  }

  generateBlockchainAddress() {
    return generateBlockchainAddress();
  }
}

const Dependeices = {
  generateUser,
  generateAddress,
  generateCreditCard,
  generateBlockchainAddress,
};

module.exports = new GenerateService(Dependeices);
