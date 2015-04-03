module.exports = function(){

    var Validators = require('../../util/validators');
    var DefaultConstants = require('../../constants/DefaultInputConstants');
    var inputs = [];

    inputs.push(
        {
            id: 'monthlyIncome',
            type: 'number',
            label: 'Monthly Income',
            placeholder: DefaultConstants.MONTHLY_INCOME_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'monthlyExpenses',
            type: 'number',
            label: 'Monthly Expenses',
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'safetyNet',
            type: 'number',
            label: 'Safety Net (Cash Reserve)',
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        }
    );

    function getRequiredInputs(){
        return inputs;
    }

    function calculate(inputValues){
        console.log("Calculate Longevity Scenarios!");
        //TODO
        return 100;
    }

    return {
        getRequiredInputs: getRequiredInputs,
        calculate: calculate
    }

}();