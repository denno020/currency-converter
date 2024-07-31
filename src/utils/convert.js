import { getOFXRate } from './get-ofx-rate'

/**
 * Convert a given amount using the flat rate, but also the OFX mark up rate
 * 
 * @param {object} opts
 * @param {number} opts.amount
 * @param {number} opts.exchangeRate
 * @returns {{ base: number, ofx: number }}
 */
export const convert = ({ amount, exchangeRate }) => {
    const ofxRate = getOFXRate(exchangeRate);

    return {
        base: amount * exchangeRate,
        ofx: amount * ofxRate
    };
}
