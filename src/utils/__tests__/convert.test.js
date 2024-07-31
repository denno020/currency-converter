import { convert } from '../convert'

describe('convert', () => {
    it('should convert floating numbercorrectly', () => {
        const { base, ofx } = convert({ amount: 100, exchangeRate: 0.74 });
        expect(base).toBe(74);
        expect(ofx).toBe(73.63);
    });

    it('should convert round number correctly', () => {
        const { base, ofx } = convert({ amount: 100, exchangeRate: 1 });
        expect(base).toBe(100);
        expect(ofx).toBe(99.5);
    });
})
