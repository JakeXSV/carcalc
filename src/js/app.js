var React = require('react');
var MainComponent = require('./components/MainComponent');
var MonthlyCostInputDefinitions = require('./defines/MonthlyCostInputDefinitions');

var inputs = MonthlyCostInputDefinitions.get();

React.render(
    <MainComponent inputs={inputs}/>,
    document.getElementById('app')
);