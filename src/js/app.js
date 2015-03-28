var React = require('react');
var InputComponent = require('./components/InputComponent/InputComponent');

var inputs = [];
var ContainerKey = 'Container';

inputs.push({
    id: 'monthlyIncomeInput',
    type: 'number',
    label: 'Monthly Income'
});
inputs.push({
    id: 'monthlyExpensesInput',
    type: 'number',
    label: 'Monthly Expenses'
});
inputs.push({
    id: 'safetyNetInput',
    type: 'number',
    label: 'Safety Net / Reserve'
});
inputs.push({
    id: 'downPaymentInput',
    type: 'number',
    label: 'Down Payment'
});
inputs.push({
    id: 'tradeInInput',
    type: 'number',
    label: 'Trade In'
});
inputs.push({
    id: 'salesTaxInput',
    type: 'number',
    label: 'Sales Tax',
    placeholder: '5.1'
});
inputs.push({
    id: 'interestRateInput',
    type: 'number',
    label: 'Interest Rate (APR)',
    placeholder: '2.9'
});
inputs.push({
    id: 'termInput',
    type: 'number',
    label: 'Term (Months)',
    placeholder: '72'
});

inputs.forEach(function(e){
   renderInput(e, 'content');
});

function renderInput(inputObj, parentElementId){
    var div = createContainer(inputObj.id+ContainerKey, parentElementId);
    React.render(
        <InputComponent
            id={inputObj.id}
            type={inputObj.type}
            label={inputObj.label}
            placeholder={inputObj.placeholder||''}
            />,
        div
    );
}

function createContainer(elementId, parentElementId){
    var div = document.createElement("div");
    div.setAttribute("id", elementId);
    document.getElementById(parentElementId).appendChild(div);
    return div;
}