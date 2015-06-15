var React = require('react');

var InputActionConstants = require('../../../constants/InputActionConstants');
var InputStore = require('../../../stores/InputStore');
var Validators = require('../../../util/Validators');
var ScenarioInputDefinitions = require('../../../defines/ScenarioInputDefinitions');

var IncomeBreakdownComponent = require('./NetIncomeBasedComponents/IncomeBreakdownComponent');
var NetIncomeTextComponent = require('./NetIncomeBasedComponents/NetIncomeTextComponent');
var SafetyNetOverTimeComponent = require('./NetIncomeBasedComponents/SafetyNetOverTimeComponent');

var listenToActions = [
    InputActionConstants.MONTHLY_INCOME_CHANGE,
    InputActionConstants.MONTHLY_EXPENSES_CHANGE
];

var ResultListComponent = React.createClass({
    _onInputChange: function() {
        this.setState({
            inputs: InputStore.getAll()
        });
    },
    componentDidMount: function() {
        var self = this;
        listenToActions.forEach(function(actionTypeConstant){
            InputStore.addChangeListener(actionTypeConstant, self._onInputChange);
        });
    },
    componentWillUnmount: function() {
        var self = this;
        listenToActions.forEach(function(actionTypeConstant){
            InputStore.removeChangeListener(actionTypeConstant, self._onInputChange);
        });
    },
    getInitialState: function() {
        return {
            inputs: InputStore.getAll()
        };
    },
    render: function() {
        var incomeBreakdownComponent;
        var netIncomeTextComponent;
        var safetyNetOverTimeComponent;

        if(Validators.validateRequiredInputsExist(ScenarioInputDefinitions.get(), this.state.inputs)){
            var netIncome = this.state.inputs.monthlyIncome - this.state.inputs.monthlyExpenses - this.props.monthlyCarCost;
            incomeBreakdownComponent = <IncomeBreakdownComponent
                netIncome={netIncome}
                monthlyIncome={this.state.inputs.monthlyIncome}
                monthlyCarCost={this.props.monthlyCarCost}
                monthlyExpenses={this.state.inputs.monthlyExpenses}
            />;
            netIncomeTextComponent = <NetIncomeTextComponent netIncome={netIncome} />;
            safetyNetOverTimeComponent = <SafetyNetOverTimeComponent netIncome={netIncome} />;
        }
        return (
            <div>
                {incomeBreakdownComponent}
                {netIncomeTextComponent}
                {safetyNetOverTimeComponent}
            </div>
        );
    }
});

module.exports = ResultListComponent;
