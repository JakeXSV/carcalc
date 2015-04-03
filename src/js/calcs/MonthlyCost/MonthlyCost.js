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
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'downPayment',
            type: 'number',
            label: 'Down Payment',
            default: DefaultConstants.DOWN_PAYMENT_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'tradeIn',
            type: 'number',
            label: 'Trade In',
            default: DefaultConstants.TRADE_IN_DEFAULT,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'salesTax',
            type: 'number',
            label: 'Sales Tax',
            default: DefaultConstants.SALES_TAX_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput,
            convert: function(e){ return parseFloat(e); }
        },
        {
            id: 'interestRate',
            type: 'number',
            label: 'Interest Rate (APR)',
            default: DefaultConstants.INTEREST_RATE_DEFAULT,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput,
            convert: function(e){ return parseFloat(e); }
        },
        {
            id: 'term',
            type: 'number',
            label: 'Term (Months)',
            default: DefaultConstants.TERM_DEFAULT,
            addOnBeforeInput: false,
            addOn: 'months',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
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

    // rate = (APR/Term);
    // Payment = (Principal * (rate*((1+rate)^term))/(((1+rate)^term)-1) )
    function calculate(inputValues){
        if(requiredInputsExist(inputValues)){
            var adjustedInterestRatePercent = inputValues.interestRate * .01;
            var adjustedSalesTaxPercent = inputValues.salesTax * .01; // 2.9 => .029
            var salesTaxAmount = inputValues.vehiclePrice * adjustedSalesTaxPercent;
            var netCost = inputValues.vehiclePrice + salesTaxAmount - inputValues.downPayment - inputValues.tradeIn;
            var rate = adjustedInterestRatePercent / 12;
            var rateCalc = (rate * Math.pow((1 + rate), inputValues.term))/(Math.pow((1 + rate), inputValues.term) - 1);
            var monthly = netCost * rateCalc;
            monthly = monthly.toFixed(2);
            return monthly;
        }else{
            return undefined;
        }
    }

    return {
        getRequiredInputs: getRequiredInputs,
        calculate: calculate
    }

}();