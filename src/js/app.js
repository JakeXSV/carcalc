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

inputs.forEach(function(e){
   renderInput(e, 'content');
});

function renderInput(inputObj, parentElementId){
    var div = document.createElement("div");
    div.setAttribute("id", inputObj.id+ContainerKey);
    document.getElementById(parentElementId).appendChild(div);
    React.render(
        <InputComponent
            id={inputObj.id}
            type={inputObj.type}
            label={inputObj.label}
            />,
        div
    );
}