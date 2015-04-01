var React = require('react');
var MainComponent = require('./components/MainComponent');

var LongevityScenariosCalc = require('./calcs/LongevityScenarios/LongevityScenarios');
var MonthlyCostCalc = require('./calcs/MonthlyCost/MonthlyCost');

var inputs = [];
inputs = inputs.concat(LongevityScenariosCalc.getRequiredInputs());
inputs = inputs.concat(MonthlyCostCalc.getRequiredInputs());

React.render(
    <MainComponent inputs={inputs}/>,
    document.getElementById('app')
);