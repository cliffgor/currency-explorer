const currencyCodes = require('currency-codes');
const axios = require('axios');

async function displayAllCurrencies() {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = response.data.rates;

    currencyCodes.data.forEach((currency) => {
      const exchangeRate = rates[currency.code];
      console.log(`${currency.code} - ${currency.currency}: ${exchangeRate}`);
    });
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
  }
}

module.exports = displayAllCurrencies;
