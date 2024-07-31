import { getOFXRate } from '../get-ofx-rate';
describe('getOFXRate', () => {
    it('calculates appropriate rate from example 1', () => {
        const baseRate = 1;
        const ofxRate = getOFXRate(baseRate);
        const expectedRate = 0.995;
        expect(ofxRate).toBe(expectedRate);
    })

    it('calculates appropriate rate from example 2', () => {
        const baseRate = 50;
        const ofxRate = getOFXRate(baseRate);
        const expectedRate = 49.75;
        expect(ofxRate).toBe(expectedRate);
    })
})
