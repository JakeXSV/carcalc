var React = require('react');
var InputComponent = require('./InputComponent');
var MonthlyCostInputDefinitions = require('../../defines/MonthlyCostInputDefinitions');
var IncomeBreakdownInputDefinitions = require('../../defines/IncomeBreakdownInputDefinitions');

var MainComponent = React.createClass({
    render: function() {
        var inputs = IncomeBreakdownInputDefinitions.get();
        inputs = inputs.concat(MonthlyCostInputDefinitions.get());
        var inputComponents;
        if(inputs !== undefined && inputs.length > 0) {
            inputComponents = inputs.map(function (e) {
                return (
                    <InputComponent
                        key={e.id}
                        id={e.id}
                        type={e.type}
                        label={e.label}
                        default={e.default}
                        required={e.required}
                        addOnBeforeInput={e.addOnBeforeInput||true}
                        addOn={e.addOn}
                        isValid={e.isValid}
                        convert={e.convert}
                        />
                );
            });
        }
        return (
            <div className="inputList">
                {inputComponents}
            </div>
        );
    }
});

module.exports = MainComponent;