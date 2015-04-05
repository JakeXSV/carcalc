var React = require('react');
var InputStore = require('../../../stores/InputStore');
var Validators = require('../../../util/Validators');
var MonthlyCostInputDefinitions = require('../../../defines/MonthlyCostInputDefinitions');

var MonthlyCostComponent = React.createClass({
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
        if(Validators.validateRequiredInputsExist(MonthlyCostInputDefinitions.get(), this.state.inputs)){
            var adjustedInterestRatePercent = this.state.inputs.interestRate * .01;
            var adjustedSalesTaxPercent = this.state.inputs.salesTax * .01; // 2.9 => .029
            var salesTaxAmount = this.state.inputs.vehiclePrice * adjustedSalesTaxPercent;
            var netCost = this.state.inputs.vehiclePrice + salesTaxAmount - this.state.inputs.downPayment - this.state.inputs.tradeIn;
            var rate = adjustedInterestRatePercent / 12;
            var rateCalc = (rate * Math.pow((1 + rate), this.state.inputs.term))/(Math.pow((1 + rate), this.state.inputs.term) - 1);
            var monthly = netCost * rateCalc;
            monthly = monthly.toFixed(2);
        }
        return (
            <div>
                <p>${monthly}/month</p>
            </div>
        );
    }
});

module.exports = MonthlyCostComponent;