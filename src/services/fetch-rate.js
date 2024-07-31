import countryToCurrency from '../Libs/CountryCurrency.json';

/**
 * Fetch rate information from API
 * 
 * @param {object} opts
 * @param {string} opts.buyCurrency  Currency being converted to
 * @param {string} opts.sellCurrency Currency being converted from
 * @returns {Promise<string>} The exchange rate for the two currencies
 */
export const fetchRate = ({ buyCurrency, sellCurrency }) => {
    return fetch(`https://rates.staging.api.paytron.com/rate/public?buyCurrency=${countryToCurrency[buyCurrency]}&sellCurrency=${countryToCurrency[sellCurrency]}`)
        .then(res => res.json())
        .then((data) => data.retailRate);
}
