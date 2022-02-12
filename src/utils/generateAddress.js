const faker = require("faker");
const generateUserId = require("./generateUserId");

// Faker Locale for English
faker.setLocale("en");

module.exports = () => {
  // User
  const id = generateUserId(1000000, 99999999);
  const uid = faker.datatype.uuid();

  // Address
  const address = faker.address.streetAddress(true);
  const city = faker.address.cityName();
  const state = faker.address.state();
  const zipCode = faker.address.zipCodeByState(state);
  const country = faker.address.country();
  const latitude = faker.address.latitude();
  const longitude = faker.address.longitude();
  const timezone = faker.address.timeZone();

  return {
    id,
    uid,
    location: {
      fullAddress: address,
      street: {
        number: address.split(" ")[0],
        name: address.split(" ").slice(1).join(" "),
      },
      city,
      state,
      country,
      zipCode,
      coordinates: {
        latitude,
        longitude,
      },
      timezone,
    },
    createdAt: new Date(),
  };
};
