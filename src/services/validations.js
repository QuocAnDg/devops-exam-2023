// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
const verifyLength = (label) => {
    if (label < 8){
        return false;
    }
    return true;
};
const verifySpecial = (label) => {
    return false;
};

module.exports = {
    isEmpty,
    verifyLength,
    verifySpecial

};
