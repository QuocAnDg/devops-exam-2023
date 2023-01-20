// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
const verifyLength = (label) => {
    if (label < 8){
        return false;
    }
    return true;
};

module.exports = {
    isEmpty,
    verifyLength,
};
