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
            isValid: Validators.validateNumberInput
        },
        {
            id: 'monthlyExpenses',
            type: 'number',
            label: 'Monthly Expenses',
            addOn: '$',
            isValid: Validators.validateNumberInput
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