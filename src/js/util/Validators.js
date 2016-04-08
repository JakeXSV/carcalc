/*
  undefined's are ok, defaults are set for inputs (and if no default, calc simply isn't made)
 */
module.exports.validateNumberInput = function (input) {
    try {
        if (input === undefined) {
            return true;
        } else {
            parseInt(input);
        }
        return true;
    }catch (e) {
        return false;
    }
};

module.exports.validatePercentInput = function (percent) {
    try {
        if (percent === undefined) {
            return true;
        } else {
            return !isNaN(parseFloat(percent));
        }
    }catch (e) {
        return false;
    }
};

module.exports.validateRequiredInputsExist = function (inputDefinitions, inputModels) {
    var isValid = true;
    inputDefinitions.forEach(function (e) {
        if (inputModels[e.id] === undefined) {
            if (e.default !== undefined) {
                inputModels[e.id] = e.default;
            } else {
                isValid = false;
            }
        }
    });
    return isValid;
};
