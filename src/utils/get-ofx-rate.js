const ofxMarkup = 0.005;

export const getOFXRate = (baseRate) => {
    return baseRate - (baseRate * ofxMarkup);
}
