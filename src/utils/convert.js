const ofxMarkup = 0.05;

/**
 * Convert a given amount using the flat rate, but also the OFX mark up rate
 * 
 * @param {number} amount
 * @param {number} exchangeRate
 * @returns {{ base: number, ofx: number }}
 */
export const convert = (amount, exchangeRate) => {
    const ofxRate = exchangeRate - (exchangeRate * ofxMarkup);

    return {
        base: amount * exchangeRate,
        ofx: amount * ofxRate
    };
}
