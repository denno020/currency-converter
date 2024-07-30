export const convert = (amount, rate) => {
    if (isNaN(amount)) {
        return "⚠️ Input isn't a number"
    }

    return amount * rate;
}
