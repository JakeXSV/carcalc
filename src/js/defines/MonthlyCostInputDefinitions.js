module.exports.get = function(){
    var DefaultInputConstants = require('../constants/DefaultInputValueConstants');
    var Validators = require('../util/Validators');
    var inputs = [
        {
            id: 'vehiclePrice',
            type: 'number',
            label: 'Vehicle Price',
            default: DefaultInputConstants.VEHICLE_PRICE_DEFAULT,
            required: DefaultInputConstants.VEHICLE_PRICE_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'downPayment',
            type: 'number',
            label: 'Down Payment',
            default: DefaultInputConstants.DOWN_PAYMENT_DEFAULT,
            required: DefaultInputConstants.DOWN_PAYMENT_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'tradeIn',
            type: 'number',
            label: 'Trade In',
            default: DefaultInputConstants.TRADE_IN_DEFAULT,
            required: DefaultInputConstants.TRADE_IN_DEFAULT === undefined,
            addOn: '$',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        },
        {
            id: 'salesTax',
            type: 'number',
            label: 'Sales Tax',
            default: DefaultInputConstants.SALES_TAX_DEFAULT,
            required: DefaultInputConstants.SALES_TAX_DEFAULT === undefined,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput,
            convert: function(e){ return parseFloat(e); }
        },
        {
            id: 'interestRate',
            type: 'number',
            label: 'Interest Rate (APR)',
            default: DefaultInputConstants.INTEREST_RATE_DEFAULT,
            required: DefaultInputConstants.INTEREST_RATE_DEFAULT === undefined,
            addOnBeforeInput: false,
            addOn: '%',
            isValid: Validators.validatePercentInput,
            convert: function(e){ return parseFloat(e); }
        },
        {
            id: 'term',
            type: 'number',
            label: 'Term (Months)',
            default: DefaultInputConstants.TERM_DEFAULT,
            required: DefaultInputConstants.TERM_DEFAULT === undefined,
            addOnBeforeInput: false,
            addOn: 'months',
            isValid: Validators.validateNumberInput,
            convert: function(e){ return parseInt(e); }
        }
    ];
    return inputs;
};