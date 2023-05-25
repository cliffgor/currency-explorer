# Currency Explorer

Currency Explorer is an npm package that provides functionalities for displaying currencies and retrieving exchange rates.

## Installation

You can install Currency Explorer using npm:

    npm install currency-explorer

## Usage

### Displaying Currencies

To display all available currencies, you can use the `displayAllCurrencies` function:

```javascript
const displayAllCurrencies = require('currency-explorer');

displayAllCurrencies();

````
This will print a list of currency codes and their corresponding names to the console.

 ## Retrieving Exchange Rates
 To fetch the exchange rate between two currencies, you can use the `getExchangeRate` function:
```javascript
const { getExchangeRate } = require('currency-explorer');

const baseCurrency = 'USD';
const targetCurrency = 'EUR';

getExchangeRate(baseCurrency, targetCurrency)
  .then((exchangeRate) => {
    console.log(`Exchange rate (${baseCurrency} to ${targetCurrency}): ${exchangeRate}`);
  })
  .catch((error) => {
    console.error('Error fetching exchange rate:', error);
  });
```
Replace `baseCurrency` and `targetCurrency` with the desired currency codes. The function returns a Promise that resolves to the exchange rate. If an error occurs, the Promise is rejected with the error message.

##  Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.
