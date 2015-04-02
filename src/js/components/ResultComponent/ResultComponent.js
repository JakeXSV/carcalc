var React = require('react');
var InputStore = require('../../stores/InputStore');

var MonthlyCostCalc = require('../../calcs/MonthlyCost/MonthlyCost');
var LongevityScenariosCalc = require('../../calcs/LongevityScenarios/LongevityScenarios');

var ResultComponent = React.createClass({
    _onInputChange: function() {
        var inputs = InputStore.getAll();
        var monthlyCost = MonthlyCostCalc.calculate(inputs);
        var longevityScenarios = LongevityScenariosCalc.calculate(inputs);
        this.setState({
            monthlyCost: monthlyCost,
            longevityScenarios: longevityScenarios
        });
    },
    componentDidMount: function() {
        InputStore.addChangeListener(this._onInputChange);
    },
    componentWillUnmount: function() {
        InputStore.removeChangeListener(this._onInputChange);
    },
    getInitialState: function(){
        return {
            monthlyCost: undefined
        };
    },
    render: function() {
        return (
            <div>
                <p>${this.state.monthlyCost}/month</p>
            </div>
        );
    }
});

module.exports = ResultComponent;