var React = require('react');
var AnimateMixin = require('react-animate');
var InputActionConstants = require('../../constants/InputActionConstants');
var InputStore = require('../../stores/InputStore');
var Validators = require('../../util/Validators');
var MonthlyCostInputDefinitions = require('../../defines/MonthlyCostInputDefinitions');
var Calculations = require('../../util/Calculations');
var NetIncomeBasedListComponent = require('./ResultComponents/NetIncomeBasedListComponent');

var ResultListComponent = React.createClass({
    mixins: [AnimateMixin],
    fadeIn: function(){
        this.animate(
            'fadeIn',
            { opacity: .5 },
            { opacity: 1 },
            500,
            { easing: 'linear' }
        );
    },
    _onInputChange: function() {
        this.setState({
            inputs: InputStore.getAll()
        });
        this.fadeIn();
    },
    componentDidMount: function() {
        InputStore.addChangeListener(InputActionConstants.MONTHLY_COST_INPUT_CHANGE, this._onInputChange);
    },
    componentWillUnmount: function() {
        InputStore.removeChangeListener(InputActionConstants.MONTHLY_COST_INPUT_CHANGE, this._onInputChange);
    },
    getInitialState: function() {
        return {
            inputs: InputStore.getAll()
        };
    },
    render: function() {
        if(Validators.validateRequiredInputsExist(MonthlyCostInputDefinitions.get(), this.state.inputs)){
            var monthlyCarCost = Calculations.monthlyCost(
                this.state.inputs.vehiclePrice,
                this.state.inputs.downPayment,
                this.state.inputs.tradeIn,
                this.state.inputs.interestRate,
                this.state.inputs.salesTax,
                this.state.inputs.term
            );
            return (
                <div>
                    <div id="monthlyCost">
                        <h2 style={this.getAnimatedStyle('fadeIn')} className="centerText">Car Payment ${monthlyCarCost}/month</h2>
                    </div>
                    <NetIncomeBasedListComponent monthlyCarCost={monthlyCarCost} />
                </div>
            );
        }
        return (
            <div></div>
        );
    }
});

module.exports = ResultListComponent;