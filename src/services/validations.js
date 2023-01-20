// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
const verifyLength = (label) => {
    if (label < 8){
        return false;
    }
    return true;
};
const verifySpecial = (label) => {
    const labelMatch = label.match('/[^a-zA-Z*!]/');

    if (labelMatch !== null) {
      return true;
    }
    return false;
};

module.exports = {
    isEmpty,
    verifyLength,
    verifySpecial

};
