const faker = require("faker");
const generateUserId = require("./generateUserId");

// Faker Locale for English
faker.setLocale("en");

module.exports = () => {
  // User
  const id = generateUserId(1000000, 99999999);
  const uid = faker.datatype.uuid();

  // Blockchain Address
  const bitcoinAddress = faker.finance.bitcoinAddress();
  const ethereumAddress = faker.finance.ethereumAddress();

  return {
    id,
    uid,
    blockchain: {
      bitcoin: bitcoinAddress,
      ethereum: ethereumAddress,
    },
    createdAt: new Date(),
  };
};
