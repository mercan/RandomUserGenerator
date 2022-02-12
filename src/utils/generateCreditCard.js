const faker = require("faker");
const generateUserId = require("./generateUserId");

// Faker Locale for English
faker.setLocale("en");

module.exports = () => {
  // User
  const id = generateUserId(1000000, 99999999);
  const uid = faker.datatype.uuid();

  // Finance
  const creditCardNumber = faker.finance.creditCardNumber("mastercard");
  const creditCardCvv = faker.finance.creditCardCVV();

  return {
    id,
    uid,
    creditCard: {
      number: creditCardNumber,
      cvv: creditCardCvv,
    },
    createdAt: new Date(),
  };
};
