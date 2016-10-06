const { getAllCountries } = require('../all');

const MAX_CODE_LENGTH = 3;

module.exports = (code) => {

  if (!code && code.length !== MAX_CODE_LENGTH) {
    throw new Error();
  }

  const formattedCode = code.toUpperCase();
  const countries = getAllCountries().filter(country => country.cca3 === formattedCode);
  if (countries.length === 0) {
    throw new Error();
  }
  return countries.reduce((prev, country) => country);
};
