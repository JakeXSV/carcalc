module.exports = function(){

    var Validators = require('../../util/validators');
    var DefaultConstants = require('../../constants/DefaultInputConstants');
    var inputs = [];

    inputs.push(
        {
            id: 'vehiclePrice',
            type: 'number',
            label: 'Vehicle Price',
            placeholder: DefaultConstants.VEHICLE_PRICE_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'downPayment',
            type: 'number',
            label: 'Down Payment',
            placeholder: DefaultConstants.DOWN_PAYMENT_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'tradeIn',
            type: 'number',
            label: 'Trade In',
            placeholder: DefaultConstants.TRADE_IN_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'salesTax',
            type: 'number',
            label: 'Sales Tax',
            placeholder: DefaultConstants.SALES_TAX_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput
        },
        {
            id: 'interestRate',
            type: 'number',
            label: 'Interest Rate (APR)',
            placeholder: DefaultConstants.INTEREST_RATE_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput
        },
        {
            id: 'termInput',
            type: 'number',
            label: 'Term (Months)',
            placeholder: DefaultConstants.TERM_DEFAULT,
            addOnBeforeInput: false,
            addOn: 'months',
            isValid: Validators.validateNumberInput
        }
    );

    function getRequiredInputs(){
        return inputs;
    }

    function calculate(inputValues){
        console.log("Calculate Monthly Cost!");
        //TODO
        return 50;
    }

    return {
        getRequiredInputs: getRequiredInputs,
        calculate: calculate
    }

}();