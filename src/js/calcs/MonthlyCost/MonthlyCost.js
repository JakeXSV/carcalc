module.exports = function(){

    var Validators = require('../../util/validators');
    var DefaultConstants = require('../../constants/DefaultInputConstants');
    var inputs = [];

    inputs.push(
        {
            id: 'vehiclePrice',
            type: 'number',
            label: 'Vehicle Price',
            default: DefaultConstants.VEHICLE_PRICE_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'downPayment',
            type: 'number',
            label: 'Down Payment',
            default: DefaultConstants.DOWN_PAYMENT_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'tradeIn',
            type: 'number',
            label: 'Trade In',
            default: DefaultConstants.TRADE_IN_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput
        },
        {
            id: 'salesTax',
            type: 'number',
            label: 'Sales Tax',
            default: DefaultConstants.SALES_TAX_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput
        },
        {
            id: 'interestRate',
            type: 'number',
            label: 'Interest Rate (APR)',
            default: DefaultConstants.INTEREST_RATE_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput
        },
        {
            id: 'termInput',
            type: 'number',
            label: 'Term (Months)',
            default: DefaultConstants.TERM_DEFAULT,
            addOnBeforeInput: false,
            addOn: 'months',
            isValid: Validators.validateNumberInput
        }
    );

    function getRequiredInputs(){
        return inputs;
    }

    function requiredInputsExist(inputValues){
        var isValid = true;
        inputs.forEach(function(e){
            if(inputValues[e.id] === undefined){
                if(e.default !== undefined){
                    inputValues[e.id] = e.default;
                }else{
                    isValid = false;
                }
            }
        });
        return isValid;
    }

    function calculate(inputValues){
        if(requiredInputsExist(inputValues)){
            // TODO
            console.log("Calculate Monthly Cost!");
            return 50;
        }else{
            return undefined;
        }
    }

    return {
        getRequiredInputs: getRequiredInputs,
        calculate: calculate
    }

}();