var React = require('react');
var AnimateMixin = require('react-animate');
var InputStore = require('../../../stores/InputStore');
var Validators = require('../../../util/Validators');
var MonthlyCostInputDefinitions = require('../../../defines/MonthlyCostInputDefinitions');
var Calculations = require('../../../util/Calculations');

var MonthlyCostComponent = React.createClass({
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
            monthly = Calculations.monthlyCost(
                this.state.inputs.vehiclePrice,
                this.state.inputs.downPayment,
                this.state.inputs.tradeIn,
                this.state.inputs.interestRate,
                this.state.inputs.salesTax,
                this.state.inputs.term
            );
        }
        return (
            <div id="monthlyCost">
                <h3 style={this.getAnimatedStyle('fadeIn')} className="centerText">${monthly}/month</h3>
            </div>
        );
    }
});

module.exports = MonthlyCostComponent;