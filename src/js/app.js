var React = require('react');
var MainComponent = require('./components/MainComponent');
var Validators = require('./util/validators');

var inputs = [];
inputs.push(
    {
        id: 'monthlyIncomeInput',
        type: 'number',
        label: 'Monthly Income',
        addOn: '$',
        isValid: Validators.validateNumberInput
    },
    {
        id: 'monthlyExpensesInput',
        type: 'number',
        label: 'Monthly Expenses',
        addOn: '$',
        isValid: Validators.validateNumberInput
    },
    {
        id: 'downPaymentInput',
        type: 'number',
        label: 'Down Payment',
        addOn: '$',
        isValid: Validators.validateNumberInput
    },
    {
        id: 'tradeInInput',
        type: 'number',
        label: 'Trade In',
        addOn: '$',
        isValid: Validators.validateNumberInput
    },
    {
        id: 'salesTaxInput',
        type: 'number',
        label: 'Sales Tax',
        placeholder: '5.1',
        addOnBeforeInput: false,
        addOn: '%',
        isValid: Validators.validatePercentInput
    },
    {
        id: 'interestRateInput',
        type: 'number',
        label: 'Interest Rate (APR)',
        placeholder: '2.9',
        addOnBeforeInput: false,
        addOn: '%',
        isValid: Validators.validatePercentInput
    },
    {
        id: 'termInput',
        type: 'number',
        label: 'Term (Months)',
        placeholder: '72',
        addOnBeforeInput: false,
        addOn: 'months',
        isValid: Validators.validateNumberInput
    }
);

React.render(
    <MainComponent inputs={inputs}/>,
    document.getElementById('app')
);