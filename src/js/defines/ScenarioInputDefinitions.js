module.exports.get = function () {
    var DefaultInputConstants = require('../constants/DefaultInputValueConstants');
    var InputActionConstants = require('../constants/InputActionConstants');
    var Validators = require('../util/Validators');
    var inputs = [
        {
            id: 'monthlyIncome',
            actionType: InputActionConstants.MONTHLY_INCOME_CHANGE,
            type: 'number',
            label: 'Monthly Income',
            default: DefaultInputConstants.MONTHLY_INCOME_DEFAULT,
            required: DefaultInputConstants.MONTHLY_INCOME_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function (e) {
                return parseInt(e);
            }
        },
        {
            id: 'monthlyExpenses',
            actionType: InputActionConstants.MONTHLY_EXPENSES_CHANGE,
            type: 'number',
            label: 'Monthly Expenses',
            default: DefaultInputConstants.MONTHLY_EXPENSES_DEFAULT,
            required: DefaultInputConstants.MONTHLY_EXPENSES_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function (e) {
                return parseInt(e);
            }
        },
        {
            id: 'safetyNet',
            actionType: InputActionConstants.SAFETY_NET_CHANGE,
            type: 'number',
            label: 'Savings / Safety Net',
            default: DefaultInputConstants.SAFETY_NET_DEFAULT,
            required: DefaultInputConstants.SAFETY_NET_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function (e) {
                return parseInt(e);
            }
        }
    ];
    return inputs;
};
