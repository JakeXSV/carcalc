var React = require('react');
var InputStore = require('../../../stores/InputStore');
var Validators = require('../../../util/Validators');
var MonthlyCostInputDefinitions = require('../../../defines/MonthlyCostInputDefinitions');
var ScenariosInputDefinitions = require('../../../defines/ScenariosInputDefinitions');
var Calculations = require('../../../util/Calculations');

var ScenariosComponent = React.createClass({
    _onInputChange: function() {
        this.setState({
            inputs: InputStore.getAll()
        });
    },
    componentDidMount: function() {
        InputStore.addChangeListener(this._onInputChange);
    },
    componentWillUnmount: function() {
        InputStore.removeChangeListener(this._onInputChange);
    },
    getInitialState: function() {
        return {
            inputs: InputStore.getAll()
        };
    },
    render: function() {
        var monthly = undefined;
        if(
            Validators.validateRequiredInputsExist(ScenariosInputDefinitions.get(), this.state.inputs) &&
            Validators.validateRequiredInputsExist(MonthlyCostInputDefinitions.get(), this.state.inputs)
        ){
            monthly = Calculations.monthlyCost(
                this.state.inputs.vehiclePrice,
                this.state.inputs.downPayment,
                this.state.inputs.tradeIn,
                this.state.inputs.interestRate,
                this.state.inputs.salesTax,
                this.state.inputs.term
            );
            //console.log(this.state.inputs);
        }
        return (
            <div></div>
        );
    }
});

module.exports = ScenariosComponent;