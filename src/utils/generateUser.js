const crypto = require("crypto");
const faker = require("faker");
const dayjs = require("dayjs");
const generateUserId = require("./generateUserId");

module.exports = (selectGender, selectCountry) => {
  // Faker Locale
  if (selectCountry) {
    faker.locale = selectCountry;
  } else {
    faker.locale = "en";
  }

  const genders = ["male", "female"];
  const roles = ["guest", "user", "administrator"];
  const sizes = ["mini", "small", "medium", "big", "large"];
  const phoneNumberFormat = "(###) ### ####";
  const birthDateFormat = "YYYY/MM/DD";

  // Birth Date
  const randomBirthDate = faker.date.between("1950-01-01", "2001-01-01");
  const birthDate = dayjs(randomBirthDate).format(birthDateFormat);

  // Registered Date
  const randomRegisteredDate = faker.date.between("2001-01-01", "2019-01-01");
  const registeredDate = dayjs(randomRegisteredDate).format(birthDateFormat);

  // User
  const id = generateUserId(1000000, 99999999);
  const uid = faker.datatype.uuid();
  let gender;

  if (selectGender && (selectGender === "male" || selectGender === "female")) {
    gender = selectGender;
  } else {
    gender = faker.random.arrayElement(genders);
  }

  const role = faker.random.arrayElement(roles);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const username = faker.internet.userName(firstName, lastName);
  const email = faker.internet.email(firstName, lastName).toLowerCase();
  const phoneNumber = faker.phone.phoneNumber(phoneNumberFormat);

  // Password
  const password = faker.internet.password();
  const passwordMD5 = crypto.createHash("md5").update(password).digest("hex");
  const passwordSHA1 = crypto.createHash("sha1").update(password).digest("hex");
  const passwordSHA256 = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const passwordSHA512 = crypto
    .createHash("sha512")
    .update(password)
    .digest("hex");

  // User Agent
  const userAgent = faker.internet.userAgent();

  // IP address
  const ipAddressV4 = faker.internet.ip();
  const ipAddressV6 = faker.internet.ipv6();

  // Job
  const jobTitle = faker.name.jobTitle();
  const jobArea = faker.name.jobArea();

  // Rating
  const rating = faker.random.number({ min: 0, max: 50 }) / 10;

  // Size
  const size = faker.random.arrayElement(sizes);

  // Address
  const address = faker.address.streetAddress(true);
  const city = faker.address.cityName();
  const state = faker.address.state();
  const zipCode = faker.address.zipCodeByState(state);
  const country = faker.address.country();
  const latitude = faker.address.latitude();
  const longitude = faker.address.longitude();
  const timezone = faker.address.timeZone();

  // Finance
  const creditCardNumber = faker.finance.creditCardNumber("mastercard");
  const creditCardCvv = faker.finance.creditCardCVV();

  // Blockchain Address
  const bitcoinAddress = faker.finance.bitcoinAddress();
  const ethereumAddress = faker.finance.ethereumAddress();

  // Company
  const companyName = faker.company.companyName();

  return {
    gender,
    name: {
      fullName: `${firstName} ${lastName}`,
      firstName,
      lastName,
    },
    login: {
      id,
      uid,
      username,
      email,
      password,
      passwordHash: {
        md5: passwordMD5,
        sha1: passwordSHA1,
        sha256: passwordSHA256,
        sha512: passwordSHA512,
      },
      phoneNumber,
      userAgent,
      role,
    },
    ipAddress: {
      v4: ipAddressV4,
      v6: ipAddressV6,
    },
    birthDate: {
      fullDate: randomBirthDate,
      date: birthDate,
      age: dayjs().diff(birthDate, "year"),
    },
    registered: {
      fullDate: randomRegisteredDate,
      date: registeredDate,
      age: dayjs().diff(registeredDate, "year"),
    },
    location: {
      country,
      city,
      state,
      fullAddress: address,
      street: {
        number: address.split(" ")[0],
        name: address.split(" ").slice(1).join(" "),
      },
      zipCode,
      coordinates: {
        latitude,
        longitude,
      },
      timezone,
    },
    creditCard: {
      number: creditCardNumber,
      cvv: creditCardCvv,
    },
    blockchain: {
      bitcoin: bitcoinAddress,
      ethereum: ethereumAddress,
    },
    company: {
      name: companyName,
    },
    job: {
      title: jobTitle,
      area: jobArea,
    },
    rating,
    size,
    createdAt: new Date(),
  };
};
