var React = require('react');
var InputComponent = require('./InputComponent');
var MonthlyCostInputDefinitions = require('../../defines/MonthlyCostInputDefinitions');
var ScenarioInputDefinitions = require('../../defines/ScenarioInputDefinitions');

var MainComponent = React.createClass({
    render: function () {
        var inputs = ScenarioInputDefinitions.get();
        inputs = inputs.concat(MonthlyCostInputDefinitions.get());
        var inputComponents;
        if (inputs !== undefined && inputs.length > 0) {
            inputComponents = inputs.map(function (e) {
                return (
                    <InputComponent
                        key={e.id}
                        id={e.id}
                        actionType={e.actionType}
                        type={e.type}
                        label={e.label}
                        default={e.default}
                        required={e.required}
                        addOnBeforeInput={e.addOnBeforeInput || true}
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
