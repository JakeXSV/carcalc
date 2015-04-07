module.exports.get = function(){
    var DefaultInputConstants = require('../constants/DefaultInputValueConstants');
    var Validators = require('../util/Validators');
    var inputs = [
        {
            id: 'monthlyIncome',
            type: 'number',
            label: 'Monthly Income',
            default: DefaultInputConstants.MONTHLY_INCOME_DEFAULT,
            required: DefaultInputConstants.MONTHLY_INCOME_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'monthlyExpenses',
            type: 'number',
            label: 'Monthly Expenses',
            default: DefaultInputConstants.MONTHLY_EXPENSES_DEFAULT,
            required: DefaultInputConstants.MONTHLY_EXPENSES_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        }
    ];
    return inputs;
};