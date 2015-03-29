var React = require('react');
var InputComponent = require('./components/InputComponent/InputComponent');

var inputs = [];
var ContainerKey = 'Container';
var InputsParentDivId = 'inputs';

function validateNumberInput(input){
    if(input !== undefined){
        try{
            parseInt(input);
            return true;
        }catch(e){
            return false;
        }
    }else{
        return false;
    }
}

function validatePercentInput(percent){
    if(percent !== undefined){
        try{
            return !isNaN(parseFloat(percent));
        }catch(e){
            return false;
        }
    }else{
        return false;
    }
}

inputs.push({
    id: 'monthlyIncomeInput',
    type: 'number',
    label: 'Monthly Income',
    isValid: validateNumberInput
});
inputs.push({
    id: 'monthlyExpensesInput',
    type: 'number',
    label: 'Monthly Expenses',
    isValid: validateNumberInput
});
inputs.push({
    id: 'safetyNetInput',
    type: 'number',
    label: 'Safety Net / Reserve',
    isValid: validateNumberInput
});
inputs.push({
    id: 'downPaymentInput',
    type: 'number',
    label: 'Down Payment',
    isValid: validateNumberInput
});
inputs.push({
    id: 'tradeInInput',
    type: 'number',
    label: 'Trade In',
    isValid: validateNumberInput
});
inputs.push({
    id: 'salesTaxInput',
    type: 'number',
    label: 'Sales Tax',
    placeholder: '5.1',
    isValid: validatePercentInput
});
inputs.push({
    id: 'interestRateInput',
    type: 'number',
    label: 'Interest Rate (APR)',
    placeholder: '2.9',
    isValid: validatePercentInput
});
inputs.push({
    id: 'termInput',
    type: 'number',
    label: 'Term (Months)',
    placeholder: '72',
    isValid: validateNumberInput
});

inputs.forEach(function(e){
   renderInput(e, InputsParentDivId);
});

function renderInput(inputObj, parentElementId){
    var div = createContainer(inputObj.id+ContainerKey, parentElementId);
    React.render(
        <InputComponent
            id={inputObj.id}
            type={inputObj.type}
            label={inputObj.label}
            placeholder={inputObj.placeholder||''}
            isValid={inputObj.isValid}
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